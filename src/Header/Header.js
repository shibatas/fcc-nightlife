import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SearchBox from '../search-box/index';

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

class Nav extends Component {
    login = () => {
        document.cookie = 'referer=' + window.location.pathname;
        this.props.history.push('/login');
    }
    logout = () => {
        this.props.logout();
    }
    handleSubmit = (value) => {
        if (value && value.length > 0) {
            this.props.setQuery({
                location: value
            });
            this.props.history.push('/list');
        } else {
            document.activeElement.blur();
        }
    }
    render() {
        console.log('nav props', this.props);
        return (
            <div className='nav'>
                <ul className='nav-links'>
                    {(this.props.location.pathname === '/list') ? (
                        <li className='link'>
                            <SearchBox onSubmit={this.handleSubmit}/>
                        </li>
                    ) : (
                        null
                    )}
                    
                    {(this.props.user) ? (
                        <li className='link' onClick={this.logout}>Logout</li>
                    ) : (
                        <li className='link' onClick={this.login}>Login</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default withRouter(Header);