import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../Filter';

describe('Filter component', () => {
  let component;
  const changeFilter = jest.fn();
  const handleClick = jest.fn();
  const mockProps = {
    symbols: {},
    options: {
      startDate: '',
      endDate: '',
      currenciesSelected: [],
    },
    onChangeFilter: changeFilter,
    handleClick: handleClick,
  }
  beforeEach(()=>{
    component = shallow(<Filter { ...mockProps } />);
  });

  it('render without crash', () => {
    expect(component.exists()).toBe(true);
  });

  it('on click filter button handleClick is triggered', () => {
    component.find('.filter-action button').at(0).simulate('click', {
      preventDefault: () => {}
    });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // it('on change date', () => {
  //   component.find('filter-date__item .input').at(0).simulate('click', {
  //     target: { value: '23/11/2001'}
  //   });
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });

});
