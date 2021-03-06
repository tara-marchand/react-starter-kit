import objectAssign from 'object-assign';
import FirebaseActionTypes from '../constants/FirebaseActionTypes';

function firebase(state = {}, action) {

    switch (action.type) {

        case FirebaseActionTypes.FIREBASE_SET_REF_URL:
            return objectAssign({}, state, { url: action.url });

        case FirebaseActionTypes.FIREBASE_REQUEST_DATA:
            return objectAssign({}, state, { isFetching: true });

        case FirebaseActionTypes.FIREBASE_RECEIVE_DATA:
            return objectAssign({}, state, { isFetching: false });

        default:
            return state;

    }

};

export default firebase;
