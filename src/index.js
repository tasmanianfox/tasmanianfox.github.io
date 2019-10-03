import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Switch, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';
import browserHistory from './history';
import * as serviceWorker from './serviceWorker';

import reducer from './reducers';
import Home from './components/Home';

const middleware = [];
const composeEnhancers = composeWithDevTools({});


const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(...middleware),
    ),
)

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={props => <Home {...props} />} />
                <Route exact path="/password_generator" component={props => <Home {...props} />} />
                <Route exact path="/hash_generator" component={props => <Home {...props} />} />
                <Route exact path="/timestamp_converter" component={props => <Home {...props} />} />
            </Switch>
        </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
