import React, { Component } from 'react';
import './Grid.css';

import GridItem from '../GridItem/GridItem';

class Grid extends Component {
    render() {
        const { posts } = this.props;
        console.log(posts);
        return (
            <div className="Grid">
                {
                    posts.map(({ by, score, title, url}, index) => {
                        return <GridItem 
                            key={`GridItem-${index}`}
                            score={score}
                            title={title}
                            url={url}
                            by={by}
                        />
                    })
                }
            </div>
        )
    }
}

export default Grid;