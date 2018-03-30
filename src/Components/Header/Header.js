import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <h1 className="Header-title">Hacker News</h1>
            </header>
        )
    }
}

export default Header;