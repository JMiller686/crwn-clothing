import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch(err) {
            console.error(err)
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <p>Sign in with you email and password</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label='Email'
                        type='email'
                        name='email' 
                        value={this.state.email} 
                        required
                    />
                    <FormInput 
                        handleChange={this.handleChange}
                        label='Password'
                        type='password'
                        name='password'
                        id='password' 
                        value={this.state.password} 
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;
