function server(url){
    return fetch(url).then(data => data.json());
}

export const fetchPokemonList = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=9';
    const response = await server(url);

    return {
        count: response.count,
        result: response.results
    };
};

export const fetchPokemonItem = async (url) => {
    return await server(url);
}