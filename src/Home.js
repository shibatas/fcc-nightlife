/* global navigator */
import React, { Component } from 'react';
import getCookie from './getCookie';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            latitude: '',
            longitude: ''
        } 
    }
    componentDidMount() {
        let referer = getCookie('referer');
        console.log('Home redirect to: ', referer);
        if (referer) {
            this.props.history.push(referer);
        }
        document.cookie = 'referer=;';
    }
    getLocation = () => {
        console.log('initiate get location');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(data => {
                console.log('lat', data.coords.latitude, 'long', data.coords.longitude);
                this.setState({
                    latitude: data.coords.latitude,
                    longitude: data.coords.longitude,
                });
                this.submitForm();
            }, err => { 
                console.error(err);
                this.props.history.push('/');
            }, { enableHighAccuracy: true });
        } else {
            console.log('no geolocation');
            document.getElementById('get-location').disabled =  true;
        }
    }
    handleChange = (e) => {
        let value = null;
        if (e.target.value !== '') {
            value = e.target.value;
        }
        this.setState({
            location: value
        });
    }
    handleClick = (e) => {
        console.log('click');
        e.preventDefault();
        switch (e.target.id) {
            case 'submit':
                this.submitForm();
                break;
            case 'get-location':
                this.getLocation();
                break;
            case 'get-started':
                this.showSearch();
                break;
            default:
        }
    }
    showSearch = () => {
        console.log('show-search');
        document.getElementById('home-intro').classList.toggle('slide');
        document.getElementById('home-search').classList.toggle('slide');
        document.cookie = 'intro=false';
    }
    submitForm = () => {
        this.props.setQuery(this.state);
        this.props.history.push('/list');
    }
    render() {
        let classAppend = getCookie('intro') ? '' : ' slide';
        return (
            <div className='home'>
                <div id='home-intro' className={'home-intro' + classAppend}>
                    <h1>Best bars TONIGHT?</h1>
                    <h1>Find out here. Instantly.</h1>
                    <button id='get-started' className='btn btn-default' onClick={this.handleClick}>Get started</button>
                </div>
                <div id='home-search' className={'home-search' + classAppend}>
                    <h1>Where are you?</h1>
                    <div className='geolocation'>
                        <button className='btn btn-default' id='get-location' onClick={this.handleClick} >Use my current location</button>
                    </div>
                    <form>
                        <input 
                            type='text' 
                            size='50'
                            placeholder='City name, address, or neighborhood'
                            onChange={this.handleChange}
                        />
                        <input id='submit' className='btn btn-primary' type='submit' value='Search' onClick={this.handleClick} />
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;