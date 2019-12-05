import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../../../components/form-input/form-input.component';
import CustomButton from '../../../../components/custom-button/custom-button.component';

import { signUpStart } from '../../../../redux/user/user.action';

import { SignUpContainer } from './sign-up.style';

const SignUp = ({ signUpStart }) => {
  const [signUpData, setSignUpData] = useState({
    email: '',
    displayName: '',
    password: '',
    confirmPassword: ''
  });

  const { email, displayName, password, confirmPassword } = signUpData;

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    signUpStart({ email, password, displayName });

    // try {
    //   // Using createUserWithEmailAndPassword built-in method of firebase to create user with email and password
    //   // from state.
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   // Then send it to firestore with createUserProfileDocument
    //   await createUserProfileDocument(user, { displayName });

    //   this.setState({
    //     email: '',
    //     displayName: '',
    //     password: '',
    //     confirmPassword: ''
    //   });
    // } catch (err) {
    //   console.log(err.message);
    // }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setSignUpData({
      ...signUpData,
      [name]: value
    });
  };

  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userDetails => dispatch(signUpStart(userDetails))
});

export default connect(null, mapDispatchToProps)(SignUp);
