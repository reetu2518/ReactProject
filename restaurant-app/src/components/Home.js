import React, { Component } from 'react';
import NavMenu from './NavMenu';

class Home extends Component {
    render() {
        return (
            <div>
                <NavMenu />
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;