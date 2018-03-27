import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SearchBox from '../search-box/index';
import Nav from './Nav';

import './style.css';

class Header extends Component {
    handleClick = (e) => {
        console.log(e.target.id);
        if (e.target.id === 'title') {
            this.backToSearch();
        }
    }
    backToSearch = () => {
        document.cookie = 'list=;';
        document.cookie = 'location=;';
        this.props.history.push('/');
    }
    render() {
        return (
            <header>
                <div className='nav-title'>
                    <h1 id='title' onClick={this.handleClick}><i className="fas fa-glass-martini fa-sm"></i>BARPICKER</h1>
                </div>
                <Nav  {...this.props} />
            </header>
        );
    }
}

export default withRouter(Header);