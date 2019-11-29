import React, { Component } from 'react';

class Footer extends Component {
    render() {
        let { previewSongURL } = this.props;
        return (
            <footer className="navbar fixed-bottom navbar-dark bg-dark row">
                <audio 
                    className="col" 
                    ref="audio_tag" 
                    src={previewSongURL}
                    controls
                    autoPlay
                    volume='0.5'
                />
            </footer>
        );
    }
}

export default Footer;