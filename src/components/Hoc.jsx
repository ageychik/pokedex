import React from "react";
import { connect } from "react-redux";

import { pokemonList, selectPokemon } from "../actions";

export const Hoc = (Components) => {
    const mapStateToProps = (state) => ({ state });
    const dispatchProps = { pokemonList, selectPokemon };

    class HOComponent extends React.Component{
        componentDidMount(){}
        render(){
            return (
                <Components {...this.props}/>
            )
        }
    }
    return connect(mapStateToProps, dispatchProps)(HOComponent);
};