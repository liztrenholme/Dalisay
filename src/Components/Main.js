import React, { Component } from 'react';
import '../App.css';

class Main extends Component {
  // constructor(props) {
  //   super(props);

  //   //console.log(time);
  // }
  state = { greeting: this.determineGreeting() };

  determineGreeting(time) {
    const d = new Date();
    time = d.getHours();
    if (time < 12) {
      return <p className='greeting'>Good morning!</p>
    }
    else if (time > 12 && time < 17) {
      return <p className='greeting'>Good afternoon!</p>
    }
    else if (time > 17) {
      return <p className='greeting'>Good evening!</p>
    }
  }
  // doGreeting(time) {
  //   this.setState({
  //     greeting: this.determineGreeting(time)
  //   });
  // }

  render() {
    return (
      <div className="Main">
        {this.state.greeting}
      </div>
    );
  }
}

export default Main;