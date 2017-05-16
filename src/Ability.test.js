import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Ability from './Ability';

jest.useFakeTimers();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ability />, div);
});

it('can be clicked to be activated', () => {
  const ability = mount(<Ability name="test ability" cooldown="1000" />);
  expect(ability.state().active).toBeFalsy();
  ability.find(".activate-button").simulate('click');
  expect(ability.state().active).toBeTruthy();
})

it('saves the time it was clicked when activated', () => {
  const ability = mount(<Ability name="test ability" cooldown="1000" />);
  ability.find(".activate-button").simulate('click');
  var d = new Date();
  var diff = Math.abs(ability.state().lastActivated.getTime() - d.getTime());
  expect(diff).toBeLessThan(100);
})

it('has a cooldown that refreshes the ability after its activated', () => {
  const ability = mount(<Ability name="test ability" cooldown="1000" />);
  ability.find(".activate-button").simulate('click');
  expect(ability.state().active).toBeTruthy();
  setTimeout( () => {
    expect(ability.state().active).toBeFalsy();
  }, 1000);
  jest.runAllTimers();
})