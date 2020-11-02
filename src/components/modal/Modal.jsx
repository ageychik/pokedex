import React from 'react';
import cx from "classnames";
import { selectPokemon} from "../../actions";
import {connect} from "react-redux";

import Button from '../../components/ui/Button';

class Modal extends React.Component {
    render() {
        const { selectPokemon: click, state } = this.props;
        const { modalOpen: open } = state.main;
        const { selectPokemon } = state.gallery;
        return (

            <div>
                <h1></h1>
                <div className={cx("modal", {"open": open})} onClick={click.bind(this, false)}>
                    { selectPokemon &&
                        <div className="modal-main" data-color={selectPokemon.types[0]}>
                            <div className="modal-close" onClick={click.bind(this, false)}>X</div>
                            <div className="modal-image">
                                <p className="modal-name">{selectPokemon.name}</p>
                                <div className="modal-picture">
                                    <img src={selectPokemon.sprites.big} alt=""/>
                                </div>
                            </div>
                            <div className="modal-info">
                                <div className="modal-buttons">
                                    {selectPokemon.types.map((type, index) => {
                                        return (<Button key={index} size={"small"} val={type} color={type}/>)
                                    })}
                                </div>
                                <ul className="modal-health">
                                   <li className="item">Healthy Points <span>{selectPokemon.hp}</span></li>
                                   <li className="item">Experience <span>{selectPokemon.base_experience}</span></li>
                                   <li className="item">Height <span>{selectPokemon.height}</span></li>
                                   <li className="item">Weight <span>{selectPokemon.weight}</span></li>
                                   <li className="item">Speed <span>{selectPokemon.speed}</span></li>
                                </ul>
                                <ul className="modal-stats">
                                    <li className="item">
                                        <div className="round"><span>{selectPokemon.attack}</span></div>
                                        <span>Attack</span>
                                    </li>
                                    <li className="item">
                                        <div className="round"><span>{selectPokemon.defense}</span></div>
                                        <span>Defense</span>
                                    </li>
                                    <li className="item">
                                        <div className="round"><span>{selectPokemon.spAttack}</span></div>
                                        <span>SP Attack</span>
                                    </li>
                                    <li className="item">
                                        <div className="round"><span>{selectPokemon.spDefense}</span></div>
                                        <span>SP Defense</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ state });
const dispatchProps = { selectPokemon };
export default connect(mapStateToProps, dispatchProps)(Modal)