import React from 'react';
import cx from "classnames";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const initialState = {
    links: [
        {val: 'Home', href: '#'}, {val: 'Pokédex', href: '#'}, {val: 'Legendaries', href: '#'}, {val: 'Documentation', href: '#'}
    ]
}

export default class Navigation extends React.Component{
    state = initialState;

    componentDidMount(){
        this.targetElement = document.querySelector('body');
    }

    render () {
        function handleOpenMenu(){
            this.props.click(!this.props.menuOpen);
            if(this.props.menuOpen){
                enableBodyScroll(this.targetElement);
            } else {
                disableBodyScroll(this.targetElement);
            }

        }

        return (
            <div className={cx("navigation", {open: this.props.menuOpen})}>
                <div className="navigation-icon" onClick={handleOpenMenu.bind(this)}>

                </div>
                <nav className="navigation-list">
                    {this.state.links.map((item, index) => {
                        return (<a href={item.href} key={index}>{item.val}</a>)
                    })}
                </nav>
            </div>
        )
    }
}