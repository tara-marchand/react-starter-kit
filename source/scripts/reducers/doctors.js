import _ from 'lodash';
import objectAssign from 'object-assign';
import Redux from 'redux';
import DoctorActionTypes from '../constants/DoctorActionTypes';
import urls from '../constants/ApiUrls';

function doctors(state = {}, action) {

    switch (action.type) {

        case DoctorActionTypes.UPDATE_LOCAL_STATE:
            return objectAssign({}, state, action.doctors);

        case DoctorActionTypes.UPDATE_DOCTOR_VIEW_STATE:
            var viewState = state[action.id].viewState;
            var newViewState = viewState;
            var firebaseRef;

            switch (viewState) {
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
                    newViewState = viewState;
                break;
            }

            /**
             * Return new array that concatenates original array...
             * 1. up to target item,
             * 2. target item, updated (combine original and updated into new object),
             * 3. from next after target item to end.
             */
            firebaseRef = new Firebase(urls.FIREBASE);
            firebaseRef.child('contractors').child(action.id).child('viewState').set(newViewState);

            return state;

        case DoctorActionTypes.DELETE_DOCTOR:
            /**
             * Return new doctors object w/out doctor w/id.
             */
            return _.reject(state, { id: action.id });

        case DoctorActionTypes.ADD_DOCTOR:
            return state;

        /**
         * Default is to do nothing and return original state.
         */
        default:
            return state;

    }

};

export default doctors;
