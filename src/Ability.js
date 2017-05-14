import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Ability extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            lastActivated: null,
        };

        this.activate = this.activate.bind(this);
    }
    render() {
        var body;
        if (this.state.active) {
            body = <div><p>Activated at {this.state.lastActivated.toString()}</p></div>;
        }
        else {
            body = <div onClick={this.activate}><p>Nobody here but us chickens!</p></div>;
        }
        return body;
    }
    activate() {
        var d = new Date();
        this.setState({ active: true, lastActivated: d });
    }
}

export default Ability;
