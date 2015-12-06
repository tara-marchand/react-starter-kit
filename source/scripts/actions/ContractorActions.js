var ContractorActionTypes = require('../constants/ContractorActionTypes');

module.exports = {

    updateContractorViewState: function(index) {
        return {
            type: ContractorActionTypes.UPDATE_CONTRACTOR_VIEW_STATE,
            index: index
        };
    },

    deleteContractor: function(index) {
        return {
            type: ContractorActionTypes.DELETE_CONTRACTOR,
            index: index
        };
    },

    addContractor: function() {
        return {};
    }

};
