var ContractorActionTypes = require('../constants/ContractorActionTypes');
var Redux = require('redux');
var objectAssign = require('object-assign');

function contractors(state = {
        isFetching: false,
        contractors: []
    }, action) {

    switch (action.type) {

        case ContractorActionTypes.UPDATE_CONTRACTOR_VIEW_STATE:
            var newViewState = state.contractors[action.index].viewState;

            switch (state.contractors[action.index].viewState) {
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
                state.contractors.slice(0, action.index),
                objectAssign({}, state.contractors[action.index], { viewState: newViewState }),
                state.contractors.slice(action.index + 1)
            )

        case ContractorActionTypes.DELETE_CONTRACTOR:
            /**
             * Return new array that concatenates original array
             * without target item...
             * 1. up to target item,
             * 2. from next after target item to end.
             */
            return [].concat(
                state.contractors.slice(0, action.index),
                state.contractors.slice(action.index + 1)
            );

        case ContractorActionTypes.REQUEST_CONTRACTORS:
            return objectAssign({}, state, {
                isFetching: true
            });

        case ContractorActionTypes.RECEIVE_CONTRACTORS:
            return objectAssign({}, state, {
                isFetching: false,
                contractors: action.contractors,
                lastUpdated: action.receivedAt
            });

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
    contractors
});
