import {POKEMON_LIST, GET_POKEMON_LIST} from '../types';

const defaultState = {
    users: [],
    pageSize: 9,
    total: 0,
    page: 0
}
export default (state = defaultState, {type, payload}) => {
    switch (type) {
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