import React, { Component } from 'react';
import Mandala from "./images/mandala.png";
import './App.css';
import Main from './Components/Main';
import About from './Components/About';
import Services from './Components/Services';
import Pets from './Components/Pets';
import Etiquette from './Components/Etiquette';
import Contact from './Components/Contact';

class App extends Component {
  constructor(props) {
    super(props); // must call super or else 'this' will be uninitialized
    this.showComponent = this.showComponent.bind(this); // bind ties the onclick to 'this'
  }
  state = { whichComponent: <Main /> };

  handleClick(event) { // this is what happens when the click is clicked
    let id = event.target.id;
    this.setState({
      whichComponent: this.showComponent(id)
    });
  }
  showComponent(id) {
    switch (id) {
      case 'home':
        return <Main />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'pets':
        return <Pets />;
      case 'etiquette':
        return <Etiquette />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" id="home">
            <img 
              id="logoimg" 
              src={Mandala} 
              alt="mandala" 
              width="70px" 
              height="70px" 
            /><h4>Dalisay</h4>
          </a>
          <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <p className="nav-item nav-link" 
                id="home" 
                onClick={this.handleClick.bind(this)}>Home</p>
              <p className="nav-item nav-link" 
                id="services" 
                onClick={this.handleClick.bind(this)}>Services</p>
              <p className="nav-item nav-link" 
                id="about" 
                onClick={this.handleClick.bind(this)}>About Rachel</p>
              <p className="nav-item nav-link" 
                id="pets" 
                onClick={this.handleClick.bind(this)}>Pets</p>
              <p className="nav-item nav-link" 
                id="etiquette" 
                onClick={this.handleClick.bind(this)}>Etiquette</p>
              <p className="nav-item nav-link" 
                id="contact" 
                onClick={this.handleClick.bind(this)}>Contact</p>
            </div>
          </div>
        </nav>

        <div className="display">
        {this.state.whichComponent}
        </div>
      </div>
      
    );
  }
}

export default App;
