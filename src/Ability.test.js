import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Ability from './Ability';

jest.useFakeTimers();

const ability = shallow(<Ability cooldown="1000" />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ability />, div);
});

it('can be clicked to be activated', () => {
  expect(ability.state().active).toBeFalsy();
  ability.simulate('click');
  expect(ability.state().active).toBeTruthy();
})

it('saves the time it was clicked when activated', () => {
  ability.simulate('click');
  var d = new Date();
  var diff = Math.abs(ability.state().lastActivated.getTime() - d.getTime());
  expect(diff).toBeLessThan(100);
})

it('has a cooldown that refreshes the ability after its activated', () => {
  ability.simulate('click');
  expect(ability.state().active).toBeTruthy();
  setTimeout( () => {
    expect(ability.state().active).toBeFalsy();
  }, 1000);
  jest.runAllTimers();
})