import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import firebaseActions from '../actions/firebase';
import contractorActions from '../actions/contractors';
import App from './App';

/**
 * Calls method to create store with initial state, with reducers
 * already passed in.
 */
var store = configureStore();

class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      )
    }
}

export default Root;
