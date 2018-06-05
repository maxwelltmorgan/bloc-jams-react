import React, { Component } from 'react';
import '../style/player_bar.css';

class PlayerBar extends Component {
  render() {

return (
      <section className="player-bar">
        <div className="container">
          <section className="control-group" id="time-control">
            <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
            <input
              type="range"
              className="seek-bar"
              value={(this.props.currentTime / this.props.duration) || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
            <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
          </section>
          <div className="row-two">
            <section className="control-group" id="voting">
              <div className="icon ion-thumbsdown vote-item"></div>
              <div className="icon ion-thumbsup vote-item"></div>
            </section>
            <section className="control-group" id="nowPlaying">
              <div className="song vote-item">-- {this.props.currentSong.title} --</div>
            </section>
            <section className="control-group" id="buttons">
              <button id="previous" onClick={this.props.handlePrevClick}>
                <span className="icon ion-skip-backward"></span>
              </button>
              <button id="play-pause" onClick={this.props.handleSongClick} >
                <span className={this.props.isPlaying ? "icon ion-pause" : "icon ion-play"} id='play-button'></span>
              </button>
              <button id="next" onClick={this.props.handleNextClick}>
                <span className="icon ion-skip-forward"></span>
              </button>
           </section>
           <section className="control-group" id="volume-control">
             <input
              type="range"
              className="seek-bar"
              value={this.props.volume}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleVolumeChange}
             />
             <div className="icon ion-volume-high"></div>
           </section>
         </div>
       </div>
      </section>
    );
  }
}

export default PlayerBar;
