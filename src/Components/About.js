import React, { Component } from 'react';
import '../App.css';

class About extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div className="About">
        <p>This is the About component!</p>
      </div>
    );
  }
}

export default About;