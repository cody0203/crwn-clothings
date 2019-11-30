import React from 'react';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import classes from './sign-in-and-sign-up.module.scss';

const SignInAndSignUp = () => (
  <div className={classes['sign-in-and-sign-up']}>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
