import {POKEMON_LIST, POKEMON_ITEM } from './types';

export function pokemonList() {return {type: POKEMON_LIST}}
export function pokemonItem(href) {return {type: POKEMON_ITEM, href}}