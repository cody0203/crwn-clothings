import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import CartProvider from './context/providers/cart/cart.provider';

ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <Router>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Router>
    </CartProvider>
  </Provider>,
  document.getElementById('root')
);
