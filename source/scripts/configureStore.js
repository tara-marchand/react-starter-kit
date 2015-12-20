import { applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './reducers';

/**
* Create a store that has redux-thunk middleware enabled.
*/
var createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
