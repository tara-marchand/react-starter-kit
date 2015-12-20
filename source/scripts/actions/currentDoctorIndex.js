import CurrentDoctorIndexActionTypes from '../constants/CurrentDoctorIndexActionTypes';
import urls from '../constants/ApiUrls';

var currentDoctorIndexActions = {};

currentDoctorIndexActions.setIndex = function(index) {
    return {
        type: CurrentDoctorIndexActionTypes.SET_CURRENT_INDEX,
        index: index
    };
};

export default currentDoctorIndexActions;
