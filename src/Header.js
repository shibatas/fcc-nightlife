import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SearchBox from './search-box/index';

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
            <div className='header'>
                <div className='nav-title'>
                    <h1 id='title' onClick={this.handleClick}>Which Bar Tonight?</h1>
                </div>
                <Nav 
                    user={this.props.user} 
                    history={this.props.history} 
                    logout={this.props.logout}
                    backToSearch={this.backToSearch}
                />
            </div>
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
    render() {
        return (
            <div>
                <ul className='nav-links'>
                    <li className='link'>
                        <SearchBox />
                    </li>
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