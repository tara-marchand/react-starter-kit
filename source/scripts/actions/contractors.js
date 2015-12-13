var ContractorActionTypes = require('../constants/ContractorActionTypes');

var contractorActions = {};

/**
 * Called every time the Firebase ref changes
 */
contractorActions.updateLocalState = function(contractors) {
    return {
        type: ContractorActionTypes.UPDATE_LOCAL_STATE,
        contractors: contractors
    };
};

/**
 * Start listening to Firebase changes.
 */
contractorActions.listenForFirebaseChanges = function() {
    return function (dispatch) {
        new Firebase(getState().firebase.url).child('contractors').on('value', function (snapshot) {
            dispatch(contractorActions.updateLocalState(snapshot.val()));
        });
    }
};

/*
 * Save updated contractors data to Firebase.
 */
contractorActions.saveStateToFirebase = function(contractors) {
    return function (dispatch) {
        new Firebase(getState().firebase.url).child('contractors').set(contractors);
        // no need for dispatch, it will trigger Firebase `value`, which will dispatch `updateLocalState`
    }
};

contractorActions.updateContractorViewState = function(id) {
    return {
        type: ContractorActionTypes.UPDATE_CONTRACTOR_VIEW_STATE,
        index: id
    };
};

contractorActions.deleteContractor = function(id) {
    return {
        type: ContractorActionTypes.DELETE_CONTRACTOR,
        id: id
    };
};

contractorActions.addContractor = function(id) {
    return {
        type: ContractorActionTypes.ADD_CONTRACTOR,
        id: id
    };
};

module.exports = contractorActions;
