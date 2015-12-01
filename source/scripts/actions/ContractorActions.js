var AppDispatcher = require('../dispatcher/AppDispatcher');
var ContractorConstants = require('../constants/ContractorConstants');

module.exports = {

    updateContractorViewState: function(id, viewState) {
        AppDispatcher.handleViewAction({
            actionType: ContractorConstants.UPDATE_CONTRACTOR_VIEW_STATE,
            id: id,
            viewState: viewState
        });
    },

    deleteContractor: function(id, viewState) {
        AppDispatcher.handleViewAction({
            actionType: ContractorConstants.DELETE_CONTRACTOR,
            id: id
        });
    }

};
