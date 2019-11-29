import React, { Component } from 'react';
import search from '../API/deezerdevs/search';
import Footer from './Footer';
import SingleSong from "./SingleSong";

class SearchResult extends Component {
    state = {
        searchQuery: this.props.match.params.searchQuery,        
        loading: true,
        previewSongURL: ""
    }
    render() {        
        let { searchQuery, searchArray, loading, previewSongURL } = this.state;
        if (loading) {
            return (
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        } else if (searchArray.data) {
            return (
                <>
                    <h3 className="display-4">Search: {searchQuery}</h3>
                    {searchArray.data.length > 0 && 
                        <div className="row">
                            {searchArray.data.map((song, index) =>
                                <SingleSong song={song} key={index} previewSong={this.previewSong}/>
                            )}                        
                        </div>
                    }
                    <Footer previewSongURL={previewSongURL}/>
                </>
            )
        }
    }
    componentDidMount = async () => {
        let searchQuery = this.props.match.params.searchQuery;
        let searchArray = await search(searchQuery);
        this.setState({
            searchArray: searchArray,
            loading: false
        })
    }
    componentDidUpdate = async (prevProps) => {
        // if (this.props.location.pathname !== prevProps.location.pathname) {
        //     let searchQuery = this.props.match.params.searchQuery;
        //     let searchArray = await search(searchQuery)

        //     searchArray.Error ? this.setState({ error: searchArray.Error }) :

        //         this.setState({
        //             searchQuery: searchQuery,
        //             searchArray: searchArray,
        //             error: false,
        //             loading: false
        //         })
        // }
    }
    previewSong = (newURL) => {
        this.setState({
            previewSongURL: newURL
        })
    }
    
}

export default SearchResult;