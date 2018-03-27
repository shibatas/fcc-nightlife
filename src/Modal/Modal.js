import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './style.css';

class Modal extends Component {
    render() {
        if (this.props.modal) {
            return (
                <div className='modal-container'>
                    <div className='modal-close'><i class="fas fa-times fa-2x"></i></div>
                </div>
            );                
        }
        else return null;
    }
}

export default withRouter(Modal);