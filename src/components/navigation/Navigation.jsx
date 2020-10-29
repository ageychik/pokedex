import React from 'react';

export default class Navigation extends React.Component{
    render () {
        return (
            <div className="navigation">
                <div className="navigation-icon">

                </div>
                <nav className="navigation-list">
                    <span>Home</span>
                    <span>Pokédex</span>
                    <span>Legendaries</span>
                    <span>Documentation</span>
                </nav>
            </div>
        )
    }
}