/* global navigator */
import React, { Component } from 'react';

import './style.css'

class MobileNav extends Component {
    render() {
        return (
            <div className='nav-mobile'>
                <div className='nav-links'>
                    <ul>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MobileNav;