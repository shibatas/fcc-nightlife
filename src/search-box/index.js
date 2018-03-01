import React, { Component } from 'react';

import './style.css';

class SearchBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }
    handleChange = (e) => {
      console.log(e.target.value);
      this.setState({
        value: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      console.log('submit', this.state.value);
      this.props.onSubmit(this.state.value);
    }
    render() {
        return (
            <div className="searchbox">
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="City or address" value={this.state.value} onChange={this.handleChange}/>
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
        );
    }
}

export default SearchBox;