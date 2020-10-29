import { POKEMON_LIST, GET_POKEMON_LIST } from '../types';

const defaultState = {};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case POKEMON_LIST:
            return { ...state };
        case GET_POKEMON_LIST:
            return { ...state, ...payload };
        default:
            return state
    }
};