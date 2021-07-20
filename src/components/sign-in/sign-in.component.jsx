import React, {useState} from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, SignInTitle, SignInButtons } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'


const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [ userCredentials, setUserCredentials ] = useState({
        email: '',
        password: ''
    })

    const {email, password} = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailSignInStart(email,password);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }
    
    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <p>Sign in with you email and password</p>

            <form onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    label='Email'
                    type='email'
                    name='email' 
                    value={email} 
                    required
                />
                <FormInput 
                    handleChange={handleChange}
                    label='Password'
                    type='password'
                    name='password'
                    id='password' 
                    value={password} 
                    required
                />
                <SignInButtons>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={ googleSignInStart } isGoogleSignIn>Sign In With Google</CustomButton>
                </SignInButtons>
                
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
