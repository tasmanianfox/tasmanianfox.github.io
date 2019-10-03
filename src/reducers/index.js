import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import layout from './layout';

export default combineReducers({
    layout,
    routing: routerReducer
});