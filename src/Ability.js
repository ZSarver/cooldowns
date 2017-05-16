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
            body = <div><p>{this.props.name} activated at {this.state.lastActivated.toString()}</p></div>;
        }
        else {
            body = <div onClick={this.activate}><p>Ready to activate {this.props.name}</p></div>;
        }
        return body;
    }
    activate() {
        this.setState({active: true, lastActivated: new Date()});
        setTimeout( () => {
            this.setState({active: false });
        }, this.props.cooldown);
    }
}

export default Ability;
