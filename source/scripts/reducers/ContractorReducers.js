var _ = require('lodash');
var objectAssign = require('object-assign');
var ContractorActionTypes = require('../constants/ContractorActionTypes');
var Redux = require('redux');

function isFetching (state = false, action) {

    switch (action.type) {

        case ContractorActionTypes.REQUEST_CONTRACTORS:
            return true;

        case ContractorActionTypes.RECEIVE_CONTRACTORS:
            return false;

        default:
            return state;
    }
}

/**
 * Reducer name refers to property in state it manages (e.g., `state.contractors`).
 */
function contractors(state = {}, action) {

    switch (action.type) {

        case ContractorActionTypes.UPDATE_CONTRACTOR_VIEW_STATE:
            var newViewState = state[action.index].viewState;

            switch (state[action.index].viewState) {
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
                    newViewState = state[action.index].viewState;
                break;
            }

            /**
             * Return new array that concatenates original array...
             * 1. up to target item,
             * 2. target item, updated (combine original and updated into new object),
             * 3. from next after target item to end.
             */
            return [].concat(
                state.slice(0, action.index),
                objectAssign({}, state[action.index], { viewState: newViewState }),
                state.slice(action.index + 1)
            )

        case ContractorActionTypes.DELETE_CONTRACTOR:
            /**
             * Return new contractors object w/out contractor w/id.
             */
            return _.reject(state, { id: action.id });

        case ContractorActionTypes.RECEIVE_CONTRACTORS:
            return objectAssign({}, state, action.contractors);

        /**
         * Default is to do nothing and return original state.
         */
        default:
            return state;
    }
}

/**
 * Generates a function that calls reducers with the slices of state selected
 * according to their keys and combines their results into a single object again.
 */
module.exports = Redux.combineReducers({
    isFetching,
    contractors
});
