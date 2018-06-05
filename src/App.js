import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className='navbar'>
            <Link className='logo' to='/'>
              <img src='assets/images/craftedSound.png' alt='crafted sound logo' className='logo' height='60'/>
            </Link>
            <div className='links-container'>
              <Link className='navbar-link' to='/library'>Library</Link>
            </div>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
