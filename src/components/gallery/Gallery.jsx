import React from 'react';
import CardGallery from '../cards/CardGallery';


export default class Gallery extends React.Component {
    render() {
        const {state, toggleModal} = this.props;
        const {result} = state.gallery;

        if (!!result) {
            return (
                <section className="gallery">
                    <div className="gallery-main">
                        {result.map((card, index) => {
                            return (<CardGallery key={index} { ...card } click={toggleModal}/>)
                        })}
                    </div>
                </section>
            );
        }

        return <div><h2>Load</h2></div>
    }
}