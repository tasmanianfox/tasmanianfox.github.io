export const ActionTypes = {
    LAYOUT_MENU_MAIN_ITEM_SELECTED: 'layout.menu_main_item_selected',
    LAYOUT_MENU_CHILD_ITEM_SELECTED: 'layout.menu_child_item_selected',
};

export const menuMainItemSelected = code => ({
    type: ActionTypes.LAYOUT_MENU_MAIN_ITEM_SELECTED,
    code
});

export const menuChildItemSelected = code => ({
    type: ActionTypes.LAYOUT_MENU_CHILD_ITEM_SELECTED,
    code
});

export default {
    menuChildItemSelected,
    menuMainItemSelected
};