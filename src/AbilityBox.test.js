import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import AbilityBox from './AbilityBox';
import Ability from './Ability'

it('renders without crashing', () => {
    shallow(<AbilityBox />);
});

it('creates abilities when the add button is clicked', () => {
    const ab = mount(<AbilityBox />);
    const nameInput = ab.find(".name-input");
    const timeInput = ab.find(".time-input");

    nameInput.simulate('change', {target: {value: "test event"}});
    timeInput.simulate('change', {target: {value: '1000'}});

    ab.find(".new-ability-form").simulate('submit');

    expect(ab.contains(<Ability name="test event" cooldown="1000" />)).toBeTruthy();
});