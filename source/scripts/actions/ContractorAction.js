var AppDispatcher = require('../dispatcher/AppDispatcher');
var ContractorConstants = require('../constants/ContractorConstants');

module.exports = {

    addItem: function() {
        AppDispatcher.handleViewAction({
            actionType: ContractorConstants.NEW_ITEM
        });
    },

    saveItem: function(text) {
        AppDispatcher.handleViewAction({
            actionType: ContractorConstants.SAVE_ITEM,
            text: text
        });
    },

    removeItem: function(index) {
        AppDispatcher.handleViewAction({
            actionType: ContractorConstants.REMOVE_ITEM,
            index: index
        });
    }

};
