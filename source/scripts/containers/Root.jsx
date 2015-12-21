import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import firebaseActions from '../actions/firebase';
import doctorActions from '../actions/doctors';
import App from './App';

/**
 * Calls method to create store with initial state, with reducers
 * already passed in.
 */
var store = configureStore({
    firebase: {},
    doctors: {},
    currentDoctorIndex: -1
});

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
