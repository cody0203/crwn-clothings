import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../../../components/form-input/form-input.component';
import CustomButton from '../../../../components/custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart
} from '../../../../redux/user/user.action';

import { ButtonsContainer, SignInContainer } from './sign-in.style';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    emailSignInStart(signInData.email, signInData.password);
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setSignInData({
      [name]: value
    });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={signInData.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={signInData.password}
          handleChange={handleChange}
          required
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>

          {/* When click it, signInWithGoogle will fired */}
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
