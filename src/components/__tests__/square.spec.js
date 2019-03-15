import React from 'react';

import { shallow } from 'enzyme';
import Square from '../square';

describe('Square tests', () => {
  it('should render the square', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Square />);

    wrapper.simulate('click');

    expect(mockClick).not.toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire handleclick is present', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Square color="aa" handleClick={mockClick} />);

    wrapper.simulate('click');

    expect(mockClick).toHaveBeenCalledWith('aa');
  });
});
