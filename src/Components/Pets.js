import React, { Component } from 'react';
import '../App.css';

class Pets extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div className="Pets">
        <p>This is the Pets component!</p>
      </div>
    );
  }
}

export default Pets;