import objectAssign from 'object-assign';
import Redux from 'redux';
import CurrentDoctorIndexActionTypes from '../constants/CurrentDoctorIndexActionTypes';

function currentDoctorIndex(state = {}, action) {
    switch (action.type) {

        case CurrentDoctorIndexActionTypes.SET_CURRENT_INDEX:
            var newIndex = parseInt(action.index, 10);
            return newIndex;

        /**
         * Default is to do nothing and return original state.
         */
        default:
            return state;

    }

};

export default currentDoctorIndex;
