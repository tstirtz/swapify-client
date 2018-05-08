import { shallow } from 'enzyme';
import React from 'react';
import DashBoard from './dashboard';
import { AddBook } from './add-book';
import BooksToSwap from './books-to-swap';
import NeededBooks from './needed-books';

describe('Dashboard page', () => {
  it('<Dashboard /> should render without crashing', () => {
    shallow(<DashBoard />);
  });
  it('<AddBook /> should render without crashing', () => {
    shallow(<AddBook />);
  });
  it('<BooksToSwap /> should render without crashing', () => {
    shallow(<BooksToSwap />);
  });
  it('<NeededBooks /> should render without crashing', () => {
    shallow(<NeededBooks />);
  });
});

describe('<AddBook />', () => {
  it('Should render BooksToSwap', () => {
    const wrapper = shallow(<AddBook />);

    wrapper.setState({value: 1});
    wrapper.update();

    const  bookToSwap = wrapper.find('BooksToSwap');
    console.log(bookToSwap);

    expect(bookToSwap).toHaveLength(1);
  });
  it('Should render NeededBooks', () => {
    const wrapper = shallow(<AddBook />);

    wrapper.setState({value: 2});
    wrapper.update();

    const  bookToSwap = wrapper.find('NeededBooks');
    console.log(bookToSwap);

    expect(bookToSwap).toHaveLength(1);
  });
});
