import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import jsdom from 'jsdom';
import { shallow, mount } from 'enzyme';
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

it('Selects only selects one post at a time', () => {
  const Component = shallow(<App />).instance();
  Component.setState({ posts: mockPosts });
  Component.onSelect("It's time to head back to RSS?", "1")
  expect(Component.state.posts[0].selected).toBe(true)
  expect(Component.state.posts[1].selected).toBe(false)
  expect(Component.state.posts[2].selected).toBe(false)

  Component.onSelect("OVH CEO: Unlike Amazon, Google, “we will never be in competition with you", "3")
  expect(Component.state.posts[0].selected).toBe(true)
  expect(Component.state.posts[1].selected).toBe(false)
  expect(Component.state.posts[2].selected).toBe(false)
});

it('Deselects selected', () => {
  const Component = shallow(<App />).instance();
  Component.setState({ posts: mockPosts });
  Component.onSelect("It's time to head back to RSS?", "1")
  setTimeout(() => {
    expect(Component.state.posts[0].selected).toBe(true)
    expect(Component.state.posts[1].selected).toBe(false)
    expect(Component.state.posts[2].selected).toBe(false)
  }, 1000)

  Component.onSelect("It's time to head back to RSS?", "1")
  Component.onSelect("OVH CEO: Unlike Amazon, Google, “we will never be in competition with you", "3")
  setTimeout(() => {
    expect(Component.state.posts[0].selected).toBe(false)
    expect(Component.state.posts[1].selected).toBe(false)
    expect(Component.state.posts[2].selected).toBe(true)
  }, 1000)
});

it('Returns correct url', () => {
  const Component = shallow(<App />).instance();
  expect(Component.getPostUrl(100)).toBe("https://hacker-news.firebaseio.com/v0/item/100.json");
});