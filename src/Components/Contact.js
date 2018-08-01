import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <form action="https://formspree.io/liztrenholme@gmail.com" method="POST">
            <center>
                <input type="text" name="fname" placeholder="First name" />
                <input type="text" name="lname" placeholder="Last name" />
                <input type="email" name="_replyto" placeholder="Your email address" />
                <textarea rows="10" cols="40" name="message" placeholder="Message..." width="50%" height="50%"></textarea>
                <input type="submit" value="Send" />
            </center>
        </form>
    </div>
    );
  }
}

export default Contact;