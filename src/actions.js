import {POKEMON_LIST, MODAL_TOGGLE, MENU_TOGGLE} from './types';

export function pokemonList(settings) {return {type: POKEMON_LIST, payload: { settings }}}
export function toggleModal(data) {return { type: MODAL_TOGGLE, payload: { data }}}
export function toggleMenu(flag) {return { type: MENU_TOGGLE, payload: { flag }}}