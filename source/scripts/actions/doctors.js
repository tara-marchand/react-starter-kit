import DoctorActionTypes from '../constants/DoctorActionTypes';
import urls from '../constants/ApiUrls';

var doctorActions = {};

/**
 * Called every time the Firebase ref changes
 */
doctorActions.updateLocalState = function(doctors) {
    return {
        type: DoctorActionTypes.UPDATE_LOCAL_STATE,
        doctors: doctors
    };
};

/**
 * Start listening to Firebase changes.
 */
doctorActions.listenForFirebaseChanges = function() {
    return function (dispatch, getState) {
        var firebaseRef = new Firebase(urls.FIREBASE);

        firebaseRef.on('value', function (snapshot) {
            dispatch(doctorActions.updateLocalState(snapshot.val()));
        });
    }
};

/*
 * Save updated doctors data to Firebase.
 */
doctorActions.saveStateToFirebase = function(doctors) {
    return function (dispatch) {
        new Firebase(urls.FIREBASE).set(doctors);
        // no need for dispatch, it will trigger Firebase `value`, which will dispatch `updateLocalState`
    }
};

doctorActions.addDoctor = function(id) {
    return {
        type: DoctorActionTypes.ADD_DOCTOR,
        id: id
    };
};

export default doctorActions;
