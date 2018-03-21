/* global navigator */
import React, { Component } from 'react';
import getCookie from '../getCookie';

import './style.css'

class Landing extends Component {
    componentDidMount() {
        let referer = getCookie('referer');
        console.log('Home redirect to: ', referer);
        if (referer) {
            this.props.history.push(referer);
        }
        document.cookie = 'referer=;';
    }
    handleClick = (e) => {
        e.preventDefault();
        
        console.log('click', e.target);
    }
    render() {
        let classAppend = getCookie('intro') ? '' : ' slide';
        return (
            <div className='landing'>
                <div className='landing-intro'>
                    <h1>Let's find good times. Fast.</h1>
                    <h3>
                        Wanna go to a bar tonight? <br/>
                        Only get the best three choices <br/>
                        So you can just pick one and go! <br/>
                    </h3>
                    <button id='get-started' className='btn btn-primary' onClick={this.handleClick}>Get started</button>
                </div>
            </div>
        );
    }
}

export default Landing;