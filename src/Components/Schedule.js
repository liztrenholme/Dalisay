import React, { Component } from 'react';
import '../App.css';

class Schedule extends Component {

    // need an if/else to decide whether to render 
    // stove or oven depending on chosen ingredient for game
    render() {
        return (
            <div className="Schedule">
                <div className="calendly-inline-widget" data-url="https://calendly.com/liztrenholme" style={{minWidth:320,height:580}}></div>
                
                <p>This is the Schedule component!</p>
            </div>
        );
    }
}

export default Schedule;