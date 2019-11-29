import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar';

class SpotifyHome extends Component {
    render() {
        return (
            <header className="container-fluid">
                <Router>
                    <NavBar />
                    
                </Router>
            </header>
        );
    }
}

export default SpotifyHome;