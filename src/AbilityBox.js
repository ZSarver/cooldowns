import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ability from './Ability';

class AbilityBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            abilities: [],
            nameValue: '',
            timeValue: 0
        };

        this.abilities = [];
        this.id = 0;

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleNameChange(event) {
        this.setState({ nameValue: event.target.value });
    }

    handleSubmit(event) {
        this.abilities.push(<Ability name={this.state.nameValue} cooldown={this.state.timeValue} handleDelete={this.handleDelete} id={this.id} />);
        this.setState({ abilities: this.abilities, nameValue: '', timeValue: 0 });
        this.id += 1;
        event.preventDefault();
        return false;
    }

    handleTimeChange(event) {
        this.setState({ timeValue: event.target.value });
    }

    handleDelete(event) {
        this.abilities.splice(event.target.value, 1);
        this.setState({ abilities: this.abilities });
    }

    render() {
        return (
            <div className="ability-box">
                <form className="new-ability-form" onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input className="name-input" type="text" value={this.state.nameValue} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Cooldown Time:
                        <input className="time-input" type="number" value={this.state.timeValue} onChange={this.handleTimeChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <ul>
                    {this.state.abilities.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        );
    }

}

export default AbilityBox;
