import React, { Component } from 'react'
import './main.css'

class Main extends Component {
  // constructor(props) {
  //   super(props);

  //   //console.log(time);
  // }
  state = { greeting: this.determineGreeting() };

  determineGreeting(time) {
    const d = new Date()
    time = d.getHours()
    if (time < 12) {
      return <span className='greeting'>Good morning!</span>
    }
    else if (time > 12 && time < 17) {
      return <span className='greeting'>Good afternoon!</span>
    }
    else if (time > 17) {
      return <span className='greeting'>Good evening!</span>
    }
    else {
      return <span className='greeting'>Hello!</span>
    }
  }

  render() {
    return (
      <div className="Main">
        {this.state.greeting}
      </div>
    )
  }
}

export default Main