import React, { Component } from 'react';
import Mandala from "./images/mandala.png";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="#"><img id="logoimg" src={Mandala} width="70px" height="70px" /><h4>Dalisay</h4></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">
                  <p className>Home</p><span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">
                  <p>Services</p>
                </a>
                <a className="nav-item nav-link" href="#">
                  <p>About Rachel</p>
                </a>
                <a className="nav-item nav-link" href="#">
                  <p>Pets</p>
                </a>
              </div>
            </div>
    </nav>
      </div>
          );
        }
      }
      
      export default App;
