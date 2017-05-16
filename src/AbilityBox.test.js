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

    nameInput.simulate('change', { target: { value: "test event" } });
    timeInput.simulate('change', { target: { value: '1000' } });

    ab.find(".new-ability-form").simulate('submit');

    expect(ab.containsAllMatchingElements([<Ability name="test event" cooldown="1000" />])).toBeTruthy();
});

it('manages deletion of abilities', () => {
    const ab = mount(<AbilityBox />);
    const nameInput = ab.find(".name-input");
    const timeInput = ab.find(".time-input");

    nameInput.simulate('change', { target: { value: "test event" } });
    timeInput.simulate('change', { target: { value: '1000' } });

    ab.find(".new-ability-form").simulate('submit');

    nameInput.simulate('change', { target: { value: "test event 2" } });
    timeInput.simulate('change', { target: { value: '1000' } });

    ab.find(".new-ability-form").simulate('submit');

    ab.find("#1").simulate('click');
    expect(ab.containsAnyMatchingElements([<Ability name="test event 2" cooldown="1000" />])).toBeFalsy();
});