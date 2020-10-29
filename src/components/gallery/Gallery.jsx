import React from 'react';
import CardGallery from '../cards/CardGallery';


export default class Gallery extends React.Component {
    render() {
        const {state} = this.props;
        const {result} = state.gallery;

        if (!!result) {
            return (
                <section className="gallery">
                    <div className="gallery-main">
                        {result.map((card, index) => {
                            return (<CardGallery key={index} { ...card }/>)
                        })}
                    </div>
                </section>
            );
        }

        return <div><h2>Load</h2></div>
    }
}