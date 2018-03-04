import React, { Component } from 'react';

import './style.css';

class SearchBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }
    componentDidMount() {
      
    }
    handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.value);
      this.setState({
        value: ''
      })
    }
    render() {
        return (
            <div className="searchbox">
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="City or address" value={this.state.value} onChange={this.handleChange}/>
                <button onMouseDown={this.handleSubmit}>
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
        );
    }
}

export default SearchBox;