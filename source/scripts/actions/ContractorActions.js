var Firebase = require('firebase');
var ContractorActionTypes = require('../constants/ContractorActionTypes');

var contractorActions = {};

contractorActions.requestContractors = function() {
    return {
        type: ContractorActionTypes.REQUEST_CONTRACTORS
    };
};

contractorActions.receiveContractors = function (contractors) {
    return {
        type: ContractorActionTypes.RECEIVE_CONTRACTORS,
        contractors: contractors
    };
};

/**
 * Action creator returns a function via react-thunk,
 * enabling asynchronous fetching of data.
 * 1. Synchronous action on load or other event: requestContractors
 * 2. Asynchronous requestion for data, then when data returned...
 * 3. Synchronous action: receiveContractors
 */
contractorActions.fetchContractors = function () {

    return function (dispatch) {
        // synchronous dispatch
        dispatch(contractorActions.requestContractors());

        return new Firebase('https://tmarchand-contractors.firebaseio.com/').child('contractors').on('value', function (contractors) {
            return dispatch(contractorActions.receiveContractors(contractors.val()));
        });
    }
};

contractorActions.updateContractorViewState = function(index) {
    return {
        type: ContractorActionTypes.UPDATE_CONTRACTOR_VIEW_STATE,
        index: index
    };
};

contractorActions.deleteContractor = function(id) {
    return {
        type: ContractorActionTypes.DELETE_CONTRACTOR,
        id: id
    };
};

contractorActions.addContractor = function() {
    return {};
};

module.exports = contractorActions;
