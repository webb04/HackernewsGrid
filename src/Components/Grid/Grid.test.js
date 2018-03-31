import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
const mockPosts = [
  {
    "by": "shawndumas",
    "descendants": 121,
    "id": 16723099,
    "kids": [
      16723769
    ],
    "score": 321,
    "time": 1522501006,
    "title": "I almost lost my hearing from the lid on the tank of a toilet",
    "type": "story",
    "url": "https://threadreaderapp.com/thread/979583605637877760.html",
    "selected": true
  },
  {
    "by": "kawera",
    "descendants": 342,
    "id": 16721690,
    "kids": [
      16723410,
    ],
    "score": 924,
    "time": 1522469718,
    "title": "It's time to head back to RSS?",
    "type": "story",
    "url": "https://www.wired.com/story/rss-readers-feedly-inoreader-old-reader/",
    "selected": false
  },
  {
    "by": "krn",
    "descendants": 62,
    "id": 16723599,
    "kids": [
      16723918
    ],
    "score": 86,
    "time": 1522508956,
    "title": "OVH CEO: Unlike Amazon, Google, “we will never be in competition with you”",
    "type": "story",
    "url": "http://www.datacenterdynamics.com/content-tracks/colo-cloud/ovh-ceo-unlike-amazon-google-we-will-never-be-in-competition-with-you/99939.fullarticle",
    "selected": false
  }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Grid />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
    const tree = renderer
      .create(<Grid />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Renders all posts', () => {
  const Component = mount(<Grid />);
  expect(Component.find('.GridItem')).toHaveLength(0)
  Component.setState({ posts: mockPosts });
  setTimeout(() => expect(Component.find('.GridItem')).toHaveLength(3), 1000)
});