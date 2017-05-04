import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Ability from './Ability';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ability />, div);
});

it('can be clicked to be activated', () => {
    const ability = shallow(<Ability />);
    expect(ability.state().active).toBeFalsy();
    ability.simulate('click');
    expect(ability.state().active).toBeTruthy();
})