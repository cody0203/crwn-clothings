import React, {Component} from 'react';
import FormInput from '../../../../components/form-input/form-input.component';
import classes from './sign-in.module.scss';
import CustomButton from '../../../../components/custom-button/custom-button.component';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = e => {
    const {value, name} = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const {email, password} = this.state;
    return (
      <div className={classes['sign-in']}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
