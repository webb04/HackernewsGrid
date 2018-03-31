import React from 'react';
import ReactDOM from 'react-dom';
import GridItem from './GridItem';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridItem by='Fred' title="Title" gridKey="" zIndex={4} score={100}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
    const tree = renderer
      .create(<GridItem by='Fred' title="Title" gridKey="" zIndex={4} score={125}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Expands post', () => {
  jest.useFakeTimers()
  const Component = mount(<GridItem selected={true} by='Fred' title="Title" gridKey="" zIndex={4} score={125}/>);
  Component.setProps({ selected: true });
  expect(Component.find('.selected')).toHaveLength(1)

});

it('Closes post', () => {
  const Component = mount(<GridItem selected={true} by='Fred' title="Title" gridKey="" zIndex={4} score={125}/>);
  Component.setProps({ selected: false });
  expect(Component.find('.selected')).toHaveLength(0)
});