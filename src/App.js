import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './modules/homepage/home.page';
import ShopPage from './modules/shop/shop.page';
import Header from './components/header/header.component';
import SignInAndSignUp from './modules/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth} from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // Get user information until they sign out
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount() {
    // Unsubscribe auth method when component unmounted
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
