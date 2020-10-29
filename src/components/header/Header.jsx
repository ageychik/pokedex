import React from 'react';
import Navigation from '../navigation/Navigation';
import logo from '../../assets/images/Logo.svg';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header-main">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <Navigation/>
                    </div>
                </div>
            </header>
        )
    }
}