import React, { Component } from 'react';
import '../App.css';

class Main extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div className="Main">
        <p>This is the main component!</p>
      </div>
    );
  }
}

export default Main;