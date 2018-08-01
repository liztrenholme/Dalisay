import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                            <form action="https://formspree.io/liztrenholme@gmail.com" method="POST">
                                <input type="text" name="fname" placeholder="First name" />
                                <input type="text" name="lname" placeholder="Last name" />
                                <input type="email" name="_replyto" placeholder="Your email address" />
                                <textarea rows="10" cols="40" name="message" placeholder="Message..." width="50%" height="50%"></textarea>
                                <input type="submit" className='btn-secondary' value="Send" />
                            </form>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;