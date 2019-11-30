import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './modules/homepage/home.page';
import ShopPage from './modules/shop/shop.page';
import Header from './components/header/header.component';
import SignInAndSignUp from './modules/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
