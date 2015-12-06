var ContractorActionTypes = require('../constants/ContractorActionTypes');
var Redux = require('redux');
var objectAssign = require('object-assign');

/**
 * Define the store.
 */
var defaultState = {
    contractors: [
        {
            id: 1,
            name: 'Fred',
            url: 'http://www.fred.com/',
            viewState: 'display'
        },
        {
            id: 2,
            name: 'Wilma',
            url: 'http://www.wilma.com/',
            viewState: 'display'
        }
    ]
};

function contractors(state = defaultState.contractors, action) {
    switch (action.type) {

        case ContractorActionTypes.UPDATE_CONTRACTOR_VIEW_STATE:

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
                    newViewState = action.viewState;
                break;
            }

            for (var i = 0; i < state.contractors.length; i++) {
                if (state.contractors[i].id === id) {
                    /**
                     * Return new array that concatenates original array...
                     * 1. up to target item,
                     * 2. target item, updated (combine original and updated into new object),
                     * 3. from next after target item to end.
                     */
                    return [].concat(
                        state.contractors.slice(0, i),
                        objectAssign({}, contractors[i], { viewState: newViewState }),
                        state.contractors.slice(i + 1)
                    );
                }
            }

        case ContractorActionTypes.DELETE_CONTRACTOR:
            for (var i = state.length - 1; i >= 0 ; i--) {
                if (state[i].id === action.id) {
                    /**
                     * Return new array that concatenates original array
                     * without target item...
                     * 1. up to target item,
                     * 2. from next after target item to end.
                     */
                    return [].concat(
                        state.slice(0, i),
                        state.slice(i + 1)
                    );
                }
            }

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
