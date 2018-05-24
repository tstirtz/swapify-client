import { shallow } from 'enzyme';
import React from 'react';
import renderTextField from './materialUI-text-field';

describe('<renderTextField>', () => {
  test('Should render without crashing', () => {
    shallow(<renderTextField />);
  });
});
