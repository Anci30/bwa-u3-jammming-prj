
import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
          <div className="Playlist">
            < input 
            onChange={this.handleNameChange} value={this.props.name} />
            <TrackList
             onRemove={this.props.onRemove}
             action='-'
            tracks={this.props.tracks} />
        <a onClick={this.props.onSave}
            className="Playlist-save">SAVE TO SPOTIFY</a>
          </div>
        );
      }
    }
    

export default Playlist;