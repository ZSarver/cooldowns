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
        console.log(this.props.id);
    }

    render() {
        var message;
        if (this.state.active) {
            message = <p>{this.props.name} activated at {this.state.lastActivated.toString()}</p>;
        }
        else {
            message = <div className="ready-to-activate"><p>Ready to activate {this.props.name}</p>
                <button className="activate-button" onClick={this.activate}>Activate</button></div>;
        }
        return (
            <div className="ability">
                {message}
                <button className="delete-button" id={this.props.id} onClick={this.props.handleDelete} value={this.props.id}>Delete</button>
            </div>
        );
    }
    activate() {
        this.setState({ active: true, lastActivated: new Date() });
        setTimeout(() => {
            this.setState({ active: false });
        }, this.props.cooldown);
    }
}

export default Ability;
