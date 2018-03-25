import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './style.css';

class Footer extends Component {
    shouldComponentUpdate() {
        return true;
    }
    render() {
        return (
            <footer>
                <div className='footer-container'>
                    <div className='footer-item'>
                        <a href='https://shoheishibata.com' target='_blank' rel='noopener noreferrer' ><i className='fa fa-home fa-lg'/></a>
                        <a href='https://github.com/shibatas' target='_blank' rel='noopener noreferrer' ><i className="fab fa-github fa-lg"></i></a>
                    </div>
                    <div className='footer-item'>How can I make this app better? Please leave a feedback!</div>
                    <div className='footer-item'>
                        This app uses <a href='https://www.yelp.com/fusion' target='_blank' rel='noopener noreferrer'>Yelp Fusion API</a> <br/>
                        © 2018 Shohei Shibata
                    </div>
                    
                </div>
            </footer>
        );
    }
}

export default withRouter(Footer);