import {POKEMON_LIST, GET_POKEMON_LIST, SELECT_POKEMON} from '../types';

const defaultState = {
    users: [],
    pageSize: 9,
    total: 0,
    page: 0,
    selectPokemon: false
}
export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case SELECT_POKEMON:
            return {...state, selectPokemon: payload.select};
        case POKEMON_LIST:
            return {...state};
        case GET_POKEMON_LIST:
            return {
                ...state,
                users: payload.result,
                total: payload.count
            };
        default:
            return state
    }
};