import React from 'react';
import { shallow } from 'enzyme';
import Section from './index';
import IconButton from '@material-ui/core/IconButton';
import { Collapse } from '@material-ui/core';

describe('Section component', () => {
  it('renders without crashing', () => {
    shallow(<Section title="Some title">Hello world</Section>);
  });
  
  it('should mount Fade component when loading is true', () => {
    const wrapper = shallow(<Section title="Some title"><p>Hello world</p></Section>)
    const button = wrapper.find(IconButton)

    button.simulate('click')
    expect(wrapper.find(Collapse).contains(<p>Hello world</p>)).toBe(true)
  })

})
