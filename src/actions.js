import {POKEMON_LIST, MENU_TOGGLE, SELECT_POKEMON} from './types';

export function pokemonList(settings) {return {type: POKEMON_LIST, payload: { settings }}}
export function selectPokemon(select) {return { type: SELECT_POKEMON, payload: { select }}}
export function toggleMenu(flag) {return { type: MENU_TOGGLE, payload: { flag }}}