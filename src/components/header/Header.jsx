import React from 'react';
import logo from '../../assets/images/Logo.svg';
import cx from 'classnames';
import { connect } from "react-redux";

// Components
import Navigation from "../navigation/Navigation";
import { toggleMenu } from "../../actions";


const initialState = {
    menu: [
        {val: 'Home', href: '#'}, {val: 'Pokédex', href: '#'}, {val: 'Legendaries', href: '#'}, {val: 'Documentation', href: '#'}
    ]
}


class Header extends React.Component {
    state = initialState;

        render() {
        const { toggleMenu : click, state } = this.props;
            return (
            <header className={cx("header", {open: state.main.menuOpen})}>
                <div className="container">
                    <div className="header-main">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <Navigation click={click} menuOpen={state.main.menuOpen}/>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({ state });
const dispatchProps = { toggleMenu };
export default connect(mapStateToProps, dispatchProps)(Header)