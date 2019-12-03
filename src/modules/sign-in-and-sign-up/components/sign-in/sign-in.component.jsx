import React, { Component } from 'react';

import FormInput from '../../../../components/form-input/form-input.component';
import CustomButton from '../../../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../../../firebase/firebase.utils';

import { ButtonsContainer, SignInContainer } from './sign-in.style';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: ''
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <ButtonsContainer>
            <CustomButton type="submit">Sign in</CustomButton>

            {/* When click it, signInWithGoogle will fired */}
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
