import React, { Component } from 'react';
import './DrawArea.css';

class TrayWidget extends Component {
    render() {
        return (
            <div className="tray">
                {this.props.children}
            </div>
        );
    }
}

export default TrayWidget;