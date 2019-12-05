import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import HomePage from './modules/homepage/home.page';
import ShopPage from './modules/shop/shop.page';
import CheckoutPageContainer from './modules/checkout/checkout.container';

import HeaderContainer from './components/header/header.container';
import SignInAndSignUp from './modules/sign-in-and-sign-up/sign-in-and-sign-up';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';

const App = ({ checkUserSession, currentUser }) => {
  // componentDidMount() {
  //   const { checkUserSession } = this.props;
  //   checkUserSession();

  //   Legacy demo for observer pattern of firebase subscribe

  //   Get user information until they sign out
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       this is same with userRef from firebase utils, return a document snapshot
  //       const userRef = await createUserProfileDocument(userAuth);

  //        Using onSnapshot method to get data with .data()
  //       It will return fields in document
  //       userRef.onSnapshot(snapShot => {
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //         });
  //       });
  //     }
  //     setCurrentUser(userAuth);
  //   });
  // }

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/check-out" component={CheckoutPageContainer} />
        <Route
          exact
          path="/sign-in"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
