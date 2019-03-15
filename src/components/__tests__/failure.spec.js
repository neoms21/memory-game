import React from 'react';
import Renderer from 'react-test-renderer';
import 'jest-styled-components';
import Failure from '../failure';

describe('Failure tests', () => {
  it('should render null', () => {
    const wrapper = Renderer.create(<Failure />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render error', () => {
    const wrapper = Renderer.create(<Failure isGameOver={true} score={11} />);

    expect(wrapper).toMatchSnapshot();
  });
});
