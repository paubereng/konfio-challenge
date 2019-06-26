import React from 'react';
import { mount } from 'enzyme';
import RatesContainer from '../RatesContainer';
import SimpleLineChart from '../../components/LineChart';
import Filter from '../../components/Filter';

describe('RatesContainer container', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(<RatesContainer />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render one <SimpleLineChart>', () => {
    expect(wrapper.find(SimpleLineChart)).toHaveLength(1);
  });

  it('should render one <Filter>', () => {
    expect(wrapper.find(Filter)).toHaveLength(1);
  });

});
