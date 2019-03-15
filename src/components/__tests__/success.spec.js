import React from 'react';
import Renderer from 'react-test-renderer';
import 'jest-styled-components';
import Success from '../success';

describe('Success tests', () => {
  it('should render null', () => {
    const wrapper = Renderer.create(<Success />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render success', () => {
    const wrapper = Renderer.create(<Success isGameWon={true} />);

    expect(wrapper).toMatchSnapshot();
  });
});
