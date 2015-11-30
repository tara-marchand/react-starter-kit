var AppDispatcher = require('../dispatcher/AppDispatcher');
var ContractorConstants = require('../constants/ContractorConstants');

module.exports = {

    updateItemViewState: function(id, viewState) {
        AppDispatcher.handleViewAction({
            actionType: ContractorConstants.UPDATE_ITEM_VIEW_STATE,
            id: id,
            viewState: viewState
        });
    }

};
