import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './index';
import CircularProgress from '@material-ui/core/CircularProgress';

describe('Spinner component', () => {
  it('renders without crashing', () => {
    shallow(<Spinner loading={true} />);
  });

  it('should mount CircularProgress component when loading is true', () => {
    const wrapper = shallow(<Spinner loading={true} />)
    expect(wrapper.find(CircularProgress)).toHaveLength(1)
  })
})
