function server(url){
    return fetch(url).then(data => data.json());
}

export const fetchPokemonList = async (settings) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${(settings.page) * settings.pageSize}&limit=${settings.pageSize}`;
    const response = await server(url);

    return {
        count: 150,
        result: response.results
    };
};

export const fetchPokemonItem = async (url) => {
    return await server(url);
}