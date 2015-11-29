var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var ContractorConstants = require('../constants/ContractorConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

/**
 * Define the store as an empty array.
 */
var contractors = {
    list: [
        {
            id: 1,
            name: 'Fred',
            initialViewState: 'display',
            url: 'http://www.fred.com/'
        },
        {
            id: 2,
            name: 'Wilma',
            initialViewState: 'display',
            url: 'http://www.wilma.com/'
        }
    ],
    editing: false
};

/**
 * Define the public event listeners and getters that
 * the views will use to listen for changes and retrieve
 * the store.
 */
var ContractorStore = objectAssign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getContractors: function() {
        return contractors;
    },

    getContractorById: function(contractorId) {
        var contractor = null;

        for (var i = 0; i < contractors.list.length; i++) {
            if (contractors.list[i].id === contractorId) {
                return contractors.list[i];
            }
        }
    }

});

/**
 *  Register each of the actions with the dispatcher
 *  by changing the store's data and emitting a change.
 */
AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {

        case ContractorConstants.NEW_ITEM:

            /**
             *  Add the data defined in the ContractorActions,
             *  which the View will pass as a payload.
             */
            contractors.editing = true;
            ContractorStore.emit(CHANGE_EVENT);
            break;

        case ContractorConstants.SAVE_ITEM:

            /**
             *  Add the data defined in the TodoActions,
             *  which the View will pass as a payload.
             */
            contractors.list.push(action.text);
            contractors.editing = false;
            ContractorStore.emit(CHANGE_EVENT);
            break;

        case ContractorConstants.REMOVE_ITEM:

            /**
             *  View should pass the contractor index that
             *  needs to be removed from the store.
             */
            contractors.list.splice(action.index, 1);
            ContractorStore.emit(CHANGE_EVENT);
            break;

        case ContractorConstants.UPDATE_ITEM_VIEW_STATE:

            /**
             *  View should pass the contractor id that
             *  needs to be updated.
             */
            for (var i = 0; i < contractors.list.length; i++) {
                if (contractors.list[i].id === action.id) {
                    contractors.list[i].viewState = action.viewState;
                    ContractorStore.emit(CHANGE_EVENT);
                    return;
                }
            }
            break;

        default:
            return true;
    }
});

module.exports = ContractorStore;
