import React from 'react';
import { render } from 'enzyme';
import Footer from '../Footer';

describe('Footer component', () => {
  let component;

  beforeEach(()=>{
    component = render(<Footer />);
  });

  it('renders correctly', () => {
      expect(component).toMatchSnapshot();
  });
});
