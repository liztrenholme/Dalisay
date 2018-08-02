import React, { Component } from 'react';
import '../App.css';

class Services extends Component {
    render() {
        return (
            <div className="Services">
                <h2>Services Offered</h2>
                <ul className='services-list'>
                    <li>Deep Tissue Massage</li>
                    <li>Relaxation Massage</li>
                    <li>Clinical Neuromuscular Therapy</li>
                    <li>Myokinesthetic Therapy</li>
                    <li>Pregnancy Massage</li>
                    <li>Reiki</li>
                </ul>
            </div>
        );
    }
}

export default Services;