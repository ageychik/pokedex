import React from 'react';
import Button from '../../components/ui/Button';

export default class CardGallery extends React.Component {
    render() {
        const {name, attack, defense, sprites, types, click} = this.props;
        const styles = {
            backgroundImage: `url(${sprites.big})`
        };

        return (
            <article className="card-gallery" onClick={click.bind(this, true)}>
                <div className="card-gallery-main">
                    <div className="card-info">
                        <h3>{name}</h3>

                        <div className="card-stats">
                            <div className="card-state">
                                <div className="num"><span>{attack}</span></div>
                                <span className="name">Attack</span>
                            </div>
                            <div className="card-state">
                                <div className="num"><span>{defense}</span></div>
                                <span className="name">Defense</span>
                            </div>
                        </div>

                        <div className="card-buttons">
                            {types.map((type, index) => {
                                return (<Button key={index} size={"small"} val={type} color={type}/>)
                            })}
                        </div>
                    </div>
                    <div className="card-picture" data-color={types[0]}>
                        <div className="card-picture-item" style={styles}/>
                    </div>
                </div>
            </article>
        )
    }
}
