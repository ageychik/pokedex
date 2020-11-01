import { MODAL_TOGGLE, MENU_TOGGLE } from '../types';

const defaultState = {
    modalOpen: false,
    menuOpen: false
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case MODAL_TOGGLE:
            return { ...state, modalOpen: payload.flag };
        case MENU_TOGGLE:
            return { ...state, menuOpen: payload.flag };
        default:
            return state
    }
};