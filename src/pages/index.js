import React from 'react';

//components
import { Hoc } from '../components/hoc';
import Find from '../components/find/Find';
import Filter from '../components/filter/Filter';
import Gallery from '../components/gallery/Gallery';

const initialState = ({
    sections: [Find, Gallery] // Filter
})

class IndexPage extends React.Component{
    state = initialState;
    componentDidMount(){
        this.props.pokemonList();
    }

    render () {
        const { sections: componentSections } = this.state;
        const { state } = this.props;
        const { gallery } = state;
        return (
            <div className="index-page">
                <div className="container">
                    <h2>{ gallery.count } <b>Pokemons</b> for you to choose your favorite</h2>
                    {componentSections.map((el, index) => {
                        const Component = el;
                        return (
                            <Component key={`section-${index}`} {...this.props} />
                        );
                    })}
                </div>
            </div>
        )
    }

}



export default Hoc(IndexPage);