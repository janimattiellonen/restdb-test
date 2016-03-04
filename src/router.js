import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import RestDbAppContainer from './components/smart/RestDbAppContainer';
import HomeContainer from './components/smart/HomeContainer';


export function createRouter({ store, history }) {

    function checkFetcher(nextState, replaceState, callback) {

        if (!this.component.fetch) {
            callback();
            return;
        }
        this.component.fetch(store).then(callback);
    }

    function initApp(nextState, replaceState, callback) {
        /*
        // rewrite to load initial data for munkirjat
        store.dispatch(receiveTodos()).then(() => {
            callback();
        });
        */
    }

    return (
        <Router history={history}>
            <Route component={RestDbAppContainer} path="/">
                <IndexRoute component={HomeContainer} />
                <Route path="discs(/:type)" component={HomeContainer} />
            </Route>
        </Router>
    );
}

