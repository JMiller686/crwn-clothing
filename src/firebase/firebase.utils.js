import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoDApEaoeUjC_pMQOV34yab0q7Yj8g-0M",
    authDomain: "crwn-clothing-8ba1d.firebaseapp.com",
    projectId: "crwn-clothing-8ba1d",
    storageBucket: "crwn-clothing-8ba1d.appspot.com",
    messagingSenderId: "842498406578",
    appId: "1:842498406578:web:ba8e0db93a04c457ef31ab",
    measurementId: "G-0QM30RLSJE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    

    const batch = firestore.batch();
    objectsToAdd.forEach(object => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, object);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transfomedCollection = collections.docs.map(doc => {
        const { title, routeName, items } = doc.data();

        return {
            routeName: encodeURI(routeName),
            id: doc.id,
            title,
            items
        }
    })

    return transfomedCollection.reduce( (accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;