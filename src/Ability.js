import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Ability extends Component {
  constructor(props) {
      super(props);
      this.state={active: false};

      this.activate = this.activate.bind(this);
  }  
  render() {
    return (
        <div onClick={this.activate}><p>Nobody here but us chickens!</p></div>
    );
  }
  activate() {
      this.setState({active: true});
  }
}

export default Ability;
