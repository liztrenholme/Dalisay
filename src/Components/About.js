import React, { Component } from 'react';
import '../App.css';

class About extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div className="About">
        <p>Rachel is a Cleveland, Ohio native.  Her life's mission to bring healing and happiness to those in need.</p>
      </div>
    );
  }
}

export default About;