import React from 'react';

export default class Find extends React.Component{
    render () {
        return (
            <form className="find-form">
                <input type="search" className="search" placeholder="Find your pokémon"/>
            </form>
        )
    }
}