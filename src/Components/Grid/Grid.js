import React, { Component } from 'react';
import './Grid.css';

import GridItem from '../GridItem/GridItem';

class Grid extends Component {
    render() {
        const { posts, onSelect } = this.props;
        return (
            <div className="Grid">
                {
                    posts.map(({ by, score, title, selected}, index) => {
                        return <GridItem
                            zIndex={ 50 - index}
                            key={`GridItem-${index}`}
                            gridKey={`GridItem-${index}`}
                            onSelect={onSelect}
                            selected={selected}
                            score={score}
                            title={title}
                            by={by}
                        />
                    })
                }
            </div>
        )
    }
}

export default Grid;