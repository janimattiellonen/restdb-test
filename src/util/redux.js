import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { syncHistory, routeReducer } from 'react-router-redux';
import { createHistory } from 'history';

export function createStore(reducers, history) {

    const createStoreWithMiddleware = applyMiddleware(
      thunk,
      syncHistory(history)
    )(reduxCreateStore);

    const reducer = combineReducers({
        ...reducers,
        routing: routeReducer
    });
    const store = createStoreWithMiddleware(reducer);

    return store;
}
