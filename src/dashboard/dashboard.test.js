import { shallow } from 'enzyme';
import React from 'react';
import DashBoard from './dashboard';
import BooksToSwap from './books-to-swap';

describe('Dashboard page', () => {
  it('<Dashboard /> should render without crashing', () => {
    shallow(<DashBoard />);
  });
  it('<BooksToSwap /> should render without crashing', () => {
    shallow(<BooksToSwap />);
  });
});
