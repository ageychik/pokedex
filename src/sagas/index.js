import { takeEvery, put, call } from 'redux-saga/effects';
import {POKEMON_LIST, GET_POKEMON_LIST} from '../types';
import { fetchPokemonList, fetchPokemonItem } from '../api/'

export function* sagaWatcher() {
    yield takeEvery(POKEMON_LIST, sagaGetList);
}

function* sagaGetList(tools) {

    try {
        const payload = yield call(fetchPokemonList, tools.payload.settings);
        for(let elem of payload.result){
            let data = yield call(fetchPokemonItem, elem.url);
            Object.assign(elem, {
                id: data.id,
                name: data.name,
                height: data.height,
                weight: data.weight,
                base_experience: data.base_experience,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                spAttack: data.stats[3].base_stat,
                spDefense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat,
                sprites: {
                    big: data.sprites.other['official-artwork'].front_default,
                    small: data.sprites.front_default
                },

                types: data.types.map( item => {
                    return item.type.name;
                })
            });
        }
        yield put({ type: GET_POKEMON_LIST, payload })
    } catch (e) {
        console.log(e)
    }
}

