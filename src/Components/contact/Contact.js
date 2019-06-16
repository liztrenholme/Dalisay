import React, { Component } from 'react'
import './contact.css'

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
                                <input type="text" required name="fname" />
                                <label htmlFor="fname">First Name*</label>
                                <input type="text" required name="lname" />
                                <label htmlFor="lname">Last Name*</label>
                                <input type="email" required name="_replyto" />
                                <label htmlFor="email">Your email address*</label>
                                <textarea required rows="10" cols="40" name="message" placeholder="Message...*" width="50%" height="50%"></textarea>
                                <input type="submit" className='btn-secondary' value="Send" />
                            </form>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact