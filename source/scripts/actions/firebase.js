var Firebase = require('firebase');
var FirebaseActionTypes = require('../constants/FirebaseActionTypes');

var firebaseActions = {};

firebaseActions.setRefUrl = function (url) {
    return {
        type: FirebaseActionTypes.FIREBASE_SET_REF_URL,
        url: url
    }
};
