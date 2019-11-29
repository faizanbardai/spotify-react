import React, { Component } from 'react';
// import { Link } from "react-router-dom";

class SingleSong extends Component {
    render() {
        let { song, previewSong } = this.props;
        return (
            
                <div className="col-6 col-md-3 col-lg-2">
                    <div className="card px-0 my-2 bg-dark">
                        <img 
                            onClick={() => previewSong(song.preview)}
                            src={song.album.cover_xl} 
                            className="card-img-top" 
                            alt={song.album.title}>
                        </img>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-dark">{song.artist.name}</li>
                                <li className="list-group-item bg-dark">{song.album.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default SingleSong;