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
        e.preventDefault();
        this.submitForm();
    }
    submitForm = () => {
        this.props.setQuery(this.state);
        this.props.history.push('/list');
    }
    render() {
        return (
            <div className='home'>
                <h1>Where are you?</h1>
                <div className='geolocation'>
                    <button className='btn btn-default' id='get-location' onClick={this.getLocation} >Use my current location</button>
                </div>
                <form>
                    <input 
                        type='text' 
                        size='50'
                        placeholder='City name, address, or neighborhood'
                        onChange={this.handleChange}
                    />
                    <input className='btn btn-primary' type='submit' value='Search' onClick={this.handleClick} />
                </form>
            </div>
        );
    }
}

export default Home;