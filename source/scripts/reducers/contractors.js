var _ = require('lodash');
var objectAssign = require('object-assign');
var Redux = require('redux');
var ContractorActionTypes = require('../constants/ContractorActionTypes');

function contractors(state = {}, action) {

    switch (action.type) {

        case ContractorActionTypes.UPDATE_LOCAL_STATE:
            return objectAssign({}, state, action.contractors);

        case ContractorActionTypes.UPDATE_CONTRACTOR_VIEW_STATE:
            var newViewState = state[action.id].viewState;

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
                    newViewState = state[action.id].viewState;
                break;
            }

            /**
             * Return new array that concatenates original array...
             * 1. up to target item,
             * 2. target item, updated (combine original and updated into new object),
             * 3. from next after target item to end.
             */
            return [].concat(
                state.slice(0, action.id),
                objectAssign({}, state[action.id], { viewState: newViewState }),
                state.slice(action.id + 1)
            )

        case ContractorActionTypes.DELETE_CONTRACTOR:
            /**
             * Return new contractors object w/out contractor w/id.
             */
            return _.reject(state, { id: action.id });

        case ContractorActionTypes.ADD_CONTRACTOR:
            return state;

        /**
         * Default is to do nothing and return original state.
         */
        default:
            return state;

    }

};

module.exports = contractors;
