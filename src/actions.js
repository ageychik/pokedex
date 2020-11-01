import {POKEMON_LIST, MODAL_TOGGLE, MENU_TOGGLE} from './types';

export function pokemonList() {return {type: POKEMON_LIST}}
export function toggleModal(flag) {return { type: MODAL_TOGGLE, payload: { flag }}}
export function toggleMenu(flag) {return { type: MENU_TOGGLE, payload: { flag }}}