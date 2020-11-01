import React from 'react';
import cx from "classnames";

export default class Modal extends React.Component {
    render() {
        const { toggleModal: click, state } = this.props;
        const { modalOpen: open } = state.main;
        return (
            <div className={cx("modal", {"open": open})} onClick={click.bind(this, false)}>
                {/*<button onClick={click.bind(this, false)}>casdc</button>*/}
            </div>
        )
    }
}
