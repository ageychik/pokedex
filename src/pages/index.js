import React from 'react';

//components
import { Hoc } from '../components/Hoc';
import Find from '../components/find/Find';
import Gallery from '../components/gallery/Gallery';

const initialState = ({
    sections: [ Find, Gallery],

});

class IndexPage extends React.Component{
    state = initialState;
    componentDidMount(){
        this.props.pokemonList(this.props.state.gallery);
    }

    render () {
        const { sections: componentSections } = this.state;
        const { state } = this.props;
        const { gallery } = state;
        return (
            <div className="index-page">
                <div className="container">
                    <div className="index-main">
                        <h2>{ gallery.count } <b>Pokemons</b> for you to choose your favorite</h2>
                        {componentSections.map((el, index) => {
                            const Component = el;
                            return (
                                <Component key={index} {...this.props} />
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}



export default Hoc(IndexPage);