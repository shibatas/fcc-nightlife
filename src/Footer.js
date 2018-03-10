import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Footer extends Component {
    shouldComponentUpdate() {
        return true;
    }
    render() {
        return (
            <footer>
                <div className='footer-container'>
                    <div className='footer-item'>This app uses <a href='https://www.yelp.com/fusion' target='_blank' rel='noopener noreferrer'>Yelp Fusion API</a></div>
                    <div className='footer-item'>Background image by <a href='https://unsplash.com/@viniciusamano' target='_blank'>@viniciusamano</a> on Unsplash</div>
                    <div className='footer-item'>© Shohei Shibata 2017</div>
                    <div className='footer-item'>
                        <a href='https://shoheishibata.com/portfolio/' target='_blank' rel='noopener noreferrer' ><i className='fa fa-home fa-2x'/></a>
                        <a href='https://github.com/shibatas' target='_blank' rel='noopener noreferrer' ><i class="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default withRouter(Footer);