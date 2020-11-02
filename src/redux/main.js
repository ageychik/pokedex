import { MODAL_TOGGLE, MENU_TOGGLE, LOAD_POKEMON } from '../types';

const defaultState = {
    modalOpen: false,
    menuOpen: false,
    load: false
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case LOAD_POKEMON:
            return { ...state, load: payload };
        case MODAL_TOGGLE:
            return { ...state, modalOpen: payload };
        case MENU_TOGGLE:
            return { ...state, menuOpen: payload.flag };
        default:
            return state
    }
};