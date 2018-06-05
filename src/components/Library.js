import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '../style/Library.css';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='album-covers container clearfix'>
        {
          this.state.albums.map( (album, index) =>
            <div className='collection-album-container column fourth'>
            <Link to={`/album/${album.slug}`} key={index} className='album-link'>
              <img src={album.albumCover} alt={album.title}/>
              <div className='collection-album-info caption'>
              <div className='album-name'>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
              </div>
            </Link>
            </div>
          )
        }
      </section>
    );
  }
}

export default Library;
