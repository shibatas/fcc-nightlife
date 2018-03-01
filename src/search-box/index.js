import React, { Component } from 'react';

import './style.css';

class SearchBox extends Component {
    render() {
        return (
            <div className="searchbox">
              <form>
                <input type="text" placeholder="Enter search word..." />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
        );
    }
}

export default SearchBox;