import React from 'react';
import cx from 'classnames';

export default class Button extends React.Component{
    render () {
        let {size = 'small', val='Button', color='gray'} = this.props;
        return (
            <button className={cx('btn', 'btn-' + size, 'btn-' + color)}>{ val }</button>
        )
    }
}
