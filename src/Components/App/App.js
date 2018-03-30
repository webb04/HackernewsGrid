import React, { Component } from 'react';
import Muuri from 'muuri';
import './App.css';

import Header from '../Header/Header';
import Grid from '../Grid/Grid';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';

const TOP_STORIES = "https://hacker-news.firebaseio.com/v0/topstories.json";
const getPostUrl = id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
let grid;

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true
    };
  }
  
  getPostUrl(id) {
    return `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
  }

  fetchPosts() {
    fetch(TOP_STORIES)
    .then(response => response.json())
    .then(postIDs => postIDs.slice(0,50).map(this.fetchPostDetails.bind(this)));
  }

  fetchPostDetails(id) {
    fetch(getPostUrl(id))
      .then(response => response.json())
      .then(post => 
        this.setState({ posts: [...this.state.posts, post], loading: false }))
  }

  componentDidMount() {
    this.fetchPosts();
  }

  reflowGrid() {
    if (document.querySelector('.Grid')) {
      grid = new Muuri('.Grid');
    }
  }

  render() {
    const { loading, posts } = this.state;
    
    if (posts.length) {
        this.reflowGrid()
    }

    return (
      <div>
        <Header />
        <div className="App">
          {
            loading && !posts.length
              ? <Loading />
              : <Grid posts={ posts }/>
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
