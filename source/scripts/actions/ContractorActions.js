var ContractorActionTypes = require('../constants/ContractorActionTypes');

module.exports = {

    updateContractorViewState: function(id, viewState) {
        return {
            type: ContractorActionTypes.UPDATE_CONTRACTOR_VIEW_STATE,
            id: id,
            viewState: viewState
        };
    },

    deleteContractor: function(id, viewState) {
        return {
            type: ContractorActionTypes.DELETE_CONTRACTOR,
            id: id
        };
    },

    addContractor: function() {
        return {};
    }

};
