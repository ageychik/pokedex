import { takeEvery, put, call } from 'redux-saga/effects';
import {POKEMON_LIST, GET_POKEMON_LIST} from '../types';
import { fetchPokemonList, fetchPokemonItem } from '../api/'

export function* sagaWatcher() {
    yield takeEvery(POKEMON_LIST, sagaGetList);
}

function* sagaGetList() {
    try {
        const payload = yield call(fetchPokemonList);
        for(let elem of payload.result){
            let data = yield call(fetchPokemonItem, elem.url);
            Object.assign(elem, {
                base_experience: data.base_experience,
                id: data.id,
                height: data.height,
                name: data.name,
                order: data.order,
                sprites: {
                    big: data.sprites.other['official-artwork'].front_default,
                    small: data.sprites.front_default
                },
                weight: data.weight,
                types: data.types.map( item => {
                    return item.type.name;
                })
            })

            console.log(data.types)
        }
        yield put({ type: GET_POKEMON_LIST, payload })
    } catch (e) {
        console.log(e)
    }
}

