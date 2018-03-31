import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './GridItem.css';

class GridItem extends Component {
    render() {
        const { by, title, score, selected, gridKey, zIndex, onSelect } = this.props;
        const GridItemClasses = classnames({
            GridItem: true,
            selected
        });
        return (
            <div style={{ zIndex: `${zIndex}` }} id={gridKey} className={GridItemClasses} onClick={() => onSelect(title, gridKey)}>
                <div className="score">{score}</div>
                <div className="details">
                    <div className="title"><strong>{title}</strong></div>
                    <div className="by">By {by}</div>
                    <div>
                        Changes to our legacy lifecycle methods.
                        {
                            selected 
                            ? <span> In React 16.3.0, we are adding a few new lifecycle methods to assist with that migration. We are also introducing new APIs for long requested features: an official context API, a ref forwarding API, and an ergonomic ref API. 
                                <br/><br/>
                                <p>React’s class component API has been around for years with little change. However, as we add support for more advanced features (such as error boundaries and the upcoming async rendering mode) we stretch this model in ways that it was not originally intended.</p>
                              </span> 
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

GridItem.defaultProps = {
    selected: false,
    onSelect: () => {}
}

GridItem.propTypes = {
    by: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    gridKey: PropTypes.string.isRequired,
    zIndex: PropTypes.number.isRequired,
    onSelect: PropTypes.func
}

export default GridItem;