/**
 * @since 2016-09-16 18:11
 * @author vivaxy
 */

'use strict';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import reducer from '../reducer';

const combinedReducers = combineReducers({
    ...reducer
});

const store = createStore(combinedReducers, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
        const nextRootReducer = require('../reducer').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
