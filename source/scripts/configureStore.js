import { applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './reducers';

/**
 * Create a store that has redux-thunk middleware enabled.
 */
var createStoreWithMiddleware = applyMiddleware(
    Thunk
)(createStore);


function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;
