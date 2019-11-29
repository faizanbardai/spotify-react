import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar';

import SearchResult from './SearchResult';


class SpotifyHome extends Component {
    state = {
        
    }
    render() {
        return (
            <header className="container-fluid">
                <Router>
                    <NavBar />
                    <Route path="/search/:searchQuery" component={SearchResult} />
                    
                </Router>
            </header>
        );
    }    
}

export default SpotifyHome;