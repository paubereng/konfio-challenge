import React from 'react';
import { render } from 'enzyme';
import LineChart from '../LineChart';

describe('LineChart component', () => {
  let component;
  const mockProps = {
    rates: [
      { name: '2019-04-26', EUR: 0.8, USD: 0.5, GBP: 0.6 },
      { name: '2019-04-27', EUR: 0.9, USD: 0.4, GBP: 0.8 },
    ],
  }

  beforeEach(()=>{
    component = render(<LineChart { ...mockProps } />);
  });

  it('renders correctly', () => {
      expect(component).toMatchSnapshot();
  });
});
