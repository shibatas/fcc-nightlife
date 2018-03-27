/* global navigator */
import React, { Component } from 'react';

import './style.css'

class MobileNav extends Component {
    render() {
        return (
            <div className='nav-mobile'>
                <div className='nav-mobile-search'>
                    <form>
                        <i class="fas fa-search fa-2x"></i>
                        <input type="text" placeholder="Press enter to search" />
                    </form>
                </div>     
                <div className='nav-mobile-links'>
                    <ul>
                        <li onClick={this.props.triggerModal}>
                            <i class="fas fa-sign-in-alt fa-lg"></i>
                            <small>Login</small>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MobileNav;