import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loading />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
    const tree = renderer
      .create(<Loading />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});
