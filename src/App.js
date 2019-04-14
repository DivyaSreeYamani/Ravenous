import React, { Component } from 'react';
import logo from './ravenous_favicon.ico';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';


class App extends Component {

constructor(props){
  super(props);
  this.state = {
    businesses: [],
  };
  this.searchYelp = this.searchYelp.bind(this);
}
  searchYelp(term, location, sortBy){
    Yelp.searchYelp(term, location, sortBy).then((businesses) =>{
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (

      <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses = {this.state.businesses}/>

      </div>
  /*    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */
    );
  }
}

export default App;
