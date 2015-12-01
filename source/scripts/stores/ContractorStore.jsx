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

function getContractorById(id) {
    for (var i = 0; i < contractors.length; i++) {
        if (contractors[i].id === id) {
            return contractors[i];
        }
    }
}

function updateContractorViewState(action) {
    var newViewState = '';
    var contractor = null;

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

    contractor = getContractorById(action.id);
    contractor.viewState = newViewState;
}

function deleteContractor(id) {
    var i = contractors.length;

    /**
     * Iterate through contractors in reverse, as items' index #s change
     * after splicing. See: http://bit.ly/1LJSgX0
     */
    for (var i = contractors.length -1; i >= 0 ; i--) {
        if (contractors[i].id === id) {
            contractors.splice(i, 1);
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

        case ContractorConstants.UPDATE_CONTRACTOR_VIEW_STATE:
            /**
             *  View should pass contractor id & current viewState via action.
             */
            updateContractorViewState(action);
            ContractorStore.emit(CHANGE_EVENT);
            break;

        case ContractorConstants.DELETE_CONTRACTOR:
            /**
             *  View should pass contractor id via action.
             */
            deleteContractor(action.id);
            ContractorStore.emit(CHANGE_EVENT);
            break;

        default:
            return true;
    }
});

module.exports = ContractorStore;
