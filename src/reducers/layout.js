import { ActionTypes } from '../actions/layout';

const INITIAL_STATE = {
    activeMenu: null,
};

const reducer = (state = INITIAL_STATE, action) => {
    let newState = {};

    switch (action.type) {
        case ActionTypes.LAYOUT_MENU_MAIN_ITEM_SELECTED:
            newState = Object.assign({}, { activeMenu: action.code });
            break;
        case ActionTypes.LAYOUT_MENU_CHILD_ITEM_SELECTED:
            newState = Object.assign({}, { activeMenu: null });
            break;
        default:
            newState = state;            
    }

    return newState;
};

export default reducer;