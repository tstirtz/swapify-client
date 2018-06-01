import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import store from '../store';
import { LoginForm } from './login-form';

describe('<LoginForm/>', () => {
  const render = (props = {}) => {
    const defaultProps = {openForm: true, closeForm: jest.fn(), pristine: true, submitting: false, handleSubmit:jest.fn() }
    props = {...defaultProps, ...props};
    return (
      <LoginForm {...props}   />
    )
  }
  test('Should render without crashing', () => {
    shallow(
      <Provider store={store}>
        {render()}
      </Provider>
    );
  });
  test('it renders loading indicator when pending', () => {
      const component = shallow(render({pending: true}));

      expect(component.find(LinearProgress).length).toEqual(1);
  })
  test('it does not renders loading indicator', () => {
      const component = shallow(render({pending: false}));

      expect(component.find(LinearProgress).length).toEqual(0);
  })
});
