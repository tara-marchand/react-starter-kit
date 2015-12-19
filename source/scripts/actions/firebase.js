import Firebase from 'firebase';
import FirebaseActionTypes from '../constants/FirebaseActionTypes';

var firebaseActions = {};

firebaseActions.setRefUrl = function (url) {
    return {
        type: FirebaseActionTypes.FIREBASE_SET_REF_URL,
        url: url
    }
};

firebaseActions.requestData = function () {
    return {
        type: FirebaseActionTypes.FIREBASE_REQUEST_DATA
    }
};

firebaseActions.receiveData = function (url) {
    return {
        type: FirebaseActionTypes.FIREBASE_RECEIVE_DATA
    }
};

export default firebaseActions;
