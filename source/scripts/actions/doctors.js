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

        firebaseRef.child('contractors').on('value', function (snapshot) {
            dispatch(doctorActions.updateLocalState(snapshot.val()));
        });
    }
};

/*
 * Save updated doctors data to Firebase.
 */
doctorActions.saveStateToFirebase = function(doctors) {
    return function (dispatch) {
        new Firebase(urls.FIREBASE).child('contractors').set(doctors);
        // no need for dispatch, it will trigger Firebase `value`, which will dispatch `updateLocalState`
    }
};

doctorActions.updateDoctorViewState = function(id) {
    return {
        type: DoctorActionTypes.UPDATE_DOCTOR_VIEW_STATE,
        id: id
    };
};

doctorActions.deleteDoctor = function(id) {
    return {
        type: DoctorActionTypes.DELETE_DOCTOR,
        id: id
    };
};

doctorActions.addDoctor = function(id) {
    return {
        type: DoctorActionTypes.ADD_DOCTOR,
        id: id
    };
};

export default doctorActions;
