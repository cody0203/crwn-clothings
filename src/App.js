import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import HomePage from './modules/homepage/home.page';
import ShopPage from './modules/shop/shop.page';
import CheckoutPage from './modules/checkout/checkout.page';

import Header from './components/header/header.component';
import SignInAndSignUp from './modules/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import CurrentUserContext from './context/current-user/current-user.context';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: undefined
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    // Get user information until they sign out
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // this is same with userRef from firebase utils, return a document snapshot
        const userRef = await createUserProfileDocument(userAuth);

        // Using onSnapshot method to get data with .data()
        // It will return fields in document
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    // Unsubscribe auth method when component unmounted
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/check-out" component={CheckoutPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
