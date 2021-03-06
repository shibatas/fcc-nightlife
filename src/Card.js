import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            iAmGoing: false,
            btnText: "I'll be there!"
        }
    }
    componentDidMount() {
        this.updateCard();
    }
    updateCard = () => {
        const today = new Date();
        const todayString = today.toISOString().slice(0,10);
        //console.log('update card', this.props.id);
        let root = process.env.REACT_APP_APIURL || '';
        axios.get(root + '/api/bars/'+this.props.id)
        .then(res => {
            //console.log(res);
            let data = Object.assign({}, res.data);
            let going = data.going.filter(item => {
                const timestampDate = item.timestamp.slice(0,10);
                //console.log(timestampDate, todayString);
                return timestampDate === todayString;
            })
            let iAmGoing = false;
            let btnText = "I'll be there!"
            going.forEach(item => {
                if (this.props.user && item.id === this.props.user.id) {
                    iAmGoing = true;
                    btnText = "I am going"
                }
            })
            data.going = going;
            this.setState({
                data: data,
                iAmGoing: iAmGoing,
                btnText: btnText
            })
        });
    }
    addGoing = (id) => {
        //console.log('new user is going to:', id)
        this.setState({
            iAmGoing: true
        });
        let obj = {
          barId: id,
          userId: this.props.user.id
        }
        axios.post('/api/going', obj)
        .then(res => {
          console.log('/api/going success', res);
          this.updateCard();
        })
        .catch(err => {
          console.error('api/going error', err);
        })
    }
    deleteGoing = (id) => {
        this.setState({
            iAmGoing: false
        });
        let obj = {
            barId: id,
            userId: this.props.user.id
        }
        axios.delete('/api/going', { data: obj })
        .then(res => {
            console.log('/api/going delete success', res);
            this.updateCard();
        })
            .catch(err => {
            console.error('api/going delete error', err);
        })
    }
    handleClick = (e) => {
        console.log('List.js click', this.props.user);
        if (!this.props.user) {
            document.cookie = 'referer=' + window.location.pathname;
            this.props.history.push('/login');
        } else {
            if (this.state.iAmGoing) {
                this.deleteGoing(e.target.id);
            } else {
               this.addGoing(e.target.id);
            }
        }
    }
    render() {
        if (this.state.data) {
            let fontSize = (this.state.data.name.length > 20) ? ('16px') : ('20px');
            let numberStyle = (this.state.data.going.length > 0) ? ({
                backgroundColor: '#c51d1d',
                color: '#eee'
            }) : ({
                backgroundColor: '#eee',
                color: '#4682b4'
            });
            return (
                <div className='list-card'>
                    <img className='card-image' src={this.state.data.image_url} alt={this.state.data.name}/>
                    <div className='card-number' style={numberStyle}>{this.state.data.going.length}<div className='text'>going tonight</div></div>
                    <div className='card-overlay'>
                        <div className='card-name' style={{
                            fontSize: fontSize
                        }}><p>{this.state.data.name}</p></div>
                        <button className='btn btn-default' 
                            id={this.state.data.id} 
                            onClick={this.handleClick} 
                        >{this.state.btnText}</button>
                    </div>
                </div>    
            );
        } else {
            return (
                <div className='list-card'>
                    <p>loading...</p>
                </div>    
            );
        }
    }
}

export default Card;