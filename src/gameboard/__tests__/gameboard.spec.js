import React from 'react';
import { shallow, mount } from 'enzyme';
import Gameboard from '../gameboard';
import * as utils from '../../utils/utils';
import * as constants from '../../utils/constants';

jest.useFakeTimers();

describe('gameboard tests', () => {
  it('should render 4 squares at the start', () => {
    const component = shallow(<Gameboard />);
    const squares = component.find('Square');
    expect(squares).toHaveLength(4);
  });

  it('should show memory board with 4 squares and disappears after timeout duration', () => {
    const component = mount(<Gameboard />);

    const button = component.find('button');
    button.simulate('click');

    const squares = component.find('Square');

    expect(squares).toHaveLength(8);
    expect(component.state().sequence).toHaveLength(4);

    jest.runAllTimers();
    component.update();
    expect(component.state().sequence).toHaveLength(0);
    expect(component.find('Square')).toHaveLength(4);
  });

  it('should not start counting until memory card is showing', () => {
    const component = mount(<Gameboard />);

    const button = component.find('button');
    button.simulate('click');

    const squares = component.find('Square');

    expect(squares).toHaveLength(8);
    expect(component.state().sequence).toHaveLength(4);

    expect(component.find('Square')).toHaveLength(8);

    const block = component.find(`Square[color="red"]`).first();
    block.props().handleClick('red');

    expect(component.state().result).toHaveLength(4);
  });

  it('should verify the sequnece of clicks', () => {
    const mockSeq = ['blue', 'orange', 'red', 'green'];
    jest.spyOn(utils, 'getBlocks').mockReturnValue(mockSeq);
    const component = mount(<Gameboard />);

    const button = component.find('button');
    button.simulate('click');

    // console.log(squares.debug());
    jest.runAllTimers();
    component.update();
    expect(component.find('Square')).toHaveLength(4);
    expect(component.state().result).toEqual(mockSeq);

    mockSeq.forEach(color => {
      const block = component.find(`Square[color="${color}"]`);
      block.props().handleClick(color);
    });

    expect(component.state().sequence).toHaveLength(4);
  });

  it('should show error div', () => {
    const mockSeq = ['blue', 'orange', 'red', 'green'];
    jest.spyOn(utils, 'getBlocks').mockReturnValue(mockSeq);
    const component = mount(<Gameboard />);

    const button = component.find('button');
    button.simulate('click');

    // console.log(squares.debug());
    jest.runAllTimers();
    component.update();
    expect(component.find('Square')).toHaveLength(4);
    expect(component.state().result).toEqual(mockSeq);

    const block = component.find(`Square[color="red"]`);
    block.props().handleClick('red');
    component.update();

    const errorDiv = component.find('div#error');
    expect(errorDiv).toHaveLength(1);
  });

  it('should show success div', () => {
    constants.MAX_SCORE = 5;
    const mockSeq = ['blue', 'orange', 'red', 'green'];
    jest.spyOn(utils, 'getBlocks').mockReturnValue(mockSeq);
    const component = mount(<Gameboard />);

    const button = component.find('button');
    button.simulate('click');

    // console.log(squares.debug());
    jest.runAllTimers();
    component.update();
    mockSeq.push('red');

    mockSeq.forEach(color => {
      const block = component.find(`Square[color="${color}"]`);
      block.props().handleClick(color);
    });

    jest.runAllTimers();
    mockSeq.forEach(color => {
      const block = component.find(`Square[color="${color}"]`);
      block.props().handleClick(color);
    });

    component.update();

    const successDiv = component.find('div#success');
    expect(successDiv).toHaveLength(1);
  });
});
