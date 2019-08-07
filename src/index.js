import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Switch, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import './index.css';
import App from './App';
import browserHistory from './history';
import * as serviceWorker from './serviceWorker';

const middleware = [];
const reducers = [];
const composeEnhancers = composeWithDevTools({});


const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    composeEnhancers(
        applyMiddleware(...middleware),
    ),
)

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
