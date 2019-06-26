import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from '../MainContainer';

describe('MainContainer container', () => {
  let component;

  beforeEach(()=>{
    component = shallow(<MainContainer />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });
});
