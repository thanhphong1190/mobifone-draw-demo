import React, { Component } from 'react';
import BodyWedget from './DrawArea/BodyWidget';
import Application from './Application';


class MyDiagram extends Component {
    constructor() {
        super();
        this.app = new Application();
    }
    render() {
        return <BodyWedget app={this.app} />;
    }
}

export default MyDiagram;