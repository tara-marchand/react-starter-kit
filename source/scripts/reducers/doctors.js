import objectAssign from 'object-assign';
import DoctorActionTypes from '../constants/DoctorActionTypes';

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
