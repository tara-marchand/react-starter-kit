import _ from 'lodash';
import objectAssign from 'object-assign';
import Redux from 'redux';
import DoctorActionTypes from '../constants/DoctorActionTypes';
import urls from '../constants/ApiUrls';

function doctors(state = {}, action) {

    switch (action.type) {

        case DoctorActionTypes.UPDATE_LOCAL_STATE:
            return objectAssign({}, state, action.doctors);

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
