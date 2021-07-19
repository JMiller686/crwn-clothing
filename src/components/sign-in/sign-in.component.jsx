import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, SignInTitle, SignInButtons } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'


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
        const { emailSignInStart } = this.props;
        const {email, password} = this.state;

        emailSignInStart(email,password);
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    

    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
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
                    <SignInButtons>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={ googleSignInStart } isGoogleSignIn>Sign In With Google</CustomButton>
                    </SignInButtons>
                    
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password ) => dispatch(emailSignInStart({email,password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
