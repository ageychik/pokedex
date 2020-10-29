import React from 'react';
import Button from '../../components/ui/Button';

export default class Filter extends React.Component{
    render () {
        return (
            <section className="filter-main">
                <Button size={"small"} val={"Filter"} color={"gray"}/>
            </section>
        )
    }
}