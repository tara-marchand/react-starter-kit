import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class SpotifyIframePlayer extends React.Component {
    componentDidMount() {
        var iframeSrc = `https://embed.spotify.com/?uri=spotify:user:${this.props.username}:playlist:${this.props.playlist}&view=${this.props.view}&theme=${this.props.theme}`;

        ReactDOM.render(<iframe src={iframeSrc} width={this.props.width} height={this.props.height} frameBorder="0" allowTransparency="true"></iframe>, this.refs.container);
    }

    render() {
        return <div className="spotify-iframe-player" ref="container"></div>
    }
}

SpotifyIframePlayer.propTypes = {
    view: PropTypes.oneOf([ 'list', 'coverart' ]),
    theme: PropTypes.oneOf([ 'black', 'white' ]),
    width: PropTypes.string,
    height: PropTypes.string
};

SpotifyIframePlayer.defaultProps = {
    view: 'list',
    theme: 'black',
    width: '300',
    height: '300'
};

export default SpotifyIframePlayer;
