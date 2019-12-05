import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../../../components/form-input/form-input.component';
import CustomButton from '../../../../components/custom-button/custom-button.component';
// import {
//   auth,
//   createUserProfileDocument
// } from '../../../../firebase/firebase.utils';

import { signUpStart } from '../../../../redux/user/user.action';

import { SignUpContainer } from './sign-up.style';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      displayName: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, displayName, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

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

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, displayName, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            required
          />

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

          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userDetails => dispatch(signUpStart(userDetails))
});

export default connect(null, mapDispatchToProps)(SignUp);
