import React from 'react';
import CardGallery from '../cards/CardGallery';
import Pagination  from "../pagination/Pagination";

export default class Gallery extends React.Component {
    render() {
        const { state, selectPokemon, pokemonList } = this.props;
        const { users, pageSize, page, total} = state.gallery;
        const { load } = state.main;

        if (!!users) {
            return (
                <section className="gallery">
                    <div className="gallery-main">
                        {users.map((card, index) => {
                            return (<CardGallery key={index} load={load} { ...card } click={ selectPokemon }/>)
                        })}
                    </div>
                    <Pagination click={pokemonList} pageSize={pageSize} total={total} page={page}/>
                </section>
            );
        }
        return <div><h2>Load</h2></div>
    }
}