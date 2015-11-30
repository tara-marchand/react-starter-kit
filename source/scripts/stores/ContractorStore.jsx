var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var ContractorConstants = require('../constants/ContractorConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

/**
 * Define the store as an empty array.
 */
var contractors = [
    {
        id: 1,
        name: 'Fred',
        url: 'http://www.fred.com/'
    },
    {
        id: 2,
        name: 'Wilma',
        url: 'http://www.wilma.com/'
    }
];

function updateContractorViewState(action) {
    var newViewState = '';
console.log(action.viewState);
    // TODO: use real logic
    switch (action.viewState) {
    case 'display':
        newViewState = 'edit';
        break;
    case 'edit':
        newViewState = 'display';
        break;
    case 'add':
        newViewState = 'edit';
        break;
    default:
        break;
    }

   for (var i = 0; i < contractors.length; i++) {
       if (contractors[i].id === action.id) {
           contractors[i].viewState = newViewState;
           return;
       }
   }
}

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
    }

});

/**
 *  Register each of the actions with the dispatcher
 *  by changing the store's data and emitting a change.
 */
ContractorStore.dispatcherIndex = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {

        case ContractorConstants.UPDATE_ITEM_VIEW_STATE:

            /**
             *  View should pass the contractor id that
             *  needs to be updated.
             */
            updateContractorViewState(action);
            ContractorStore.emit(CHANGE_EVENT);
            break;

        default:
            return true;
    }
});

module.exports = ContractorStore;
