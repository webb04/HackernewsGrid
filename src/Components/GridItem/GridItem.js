import React, { Component } from 'react';
import './GridItem.css';

class GridItem extends Component {
    render() {
        const { by, title, score, url } = this.props;
        return (
            <div className="GridItem">
                <div>{ by }</div>
                <div>{ title }</div>
                <div>{ score }</div>
                <div>{ url }</div>
            </div>
        )
    }
}

export default GridItem;