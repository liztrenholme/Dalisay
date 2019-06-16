import React, { Component } from 'react'
import Mandala from './images/mandala.png'
import './App.css'
import Main from './Components/main/Main'
import About from './Components/about/About'
import Services from './Components/services/Services'
import Pets from './Components/pets/Pets'
import Etiquette from './Components/etiquette/Etiquette'
import Contact from './Components/contact/Contact'

class App extends Component {
  state = { whichComponent: <Main /> };

  handleClick = (event) => {
    let id = event.target.id
    this.setState({
      whichComponent: this.showComponent(id)
    })
  }
  showComponent(id) {
    switch (id) {
      case 'home':
        return <Main />
      case 'services':
        return <Services />
      case 'about':
        return <About />
      case 'pets':
        return <Pets />
      case 'etiquette':
        return <Etiquette />
      case 'contact':
        return <Contact />
      default:
        return null
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
                onClick={this.handleClick}>Home</p>
              <p className="nav-item nav-link" 
                id="services" 
                onClick={this.handleClick}>Services</p>
              <p className="nav-item nav-link" 
                id="about" 
                onClick={this.handleClick}>About Rachel</p>
              <p className="nav-item nav-link" 
                id="pets" 
                onClick={this.handleClick}>Pets</p>
              <p className="nav-item nav-link" 
                id="etiquette" 
                onClick={this.handleClick}>Etiquette</p>
              <p className="nav-item nav-link" 
                id="contact" 
                onClick={this.handleClick}>Contact</p>
            </div>
          </div>
        </nav>

        <div className="display">
        {this.state.whichComponent}
        </div>
      </div>
      
    )
  }
}

export default App
