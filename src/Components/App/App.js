import React, { Component } from 'react';
import Muuri from 'muuri';
import $ from 'jquery';
import fetch from 'isomorphic-fetch';
import './App.css';

import Header from '../Header/Header';
import Grid from '../Grid/Grid';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';

const TOP_STORIES = "https://hacker-news.firebaseio.com/v0/topstories.json";
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
    fetch(this.getPostUrl(id))
      .then(response => response.json())
      .then(post => {
        post.selected = false
        this.setState({ posts: [...this.state.posts, post], loading: false })
      })
  }

  componentDidMount() {
    this.fetchPosts();
  }

  reflowGrid() {
    if (!document) return;
    if (document.querySelector('.Grid')) {
      setTimeout(() => grid = new Muuri('.Grid', {
        layout: {
          fillGaps: true,
        }
      }), 0);
    }
  }

  onSelect(title, key) {
    const posts = this.state.posts;
    // user has to close before opening another
    const selected = posts.filter(post => post.selected);
    if (selected.length && selected[0].title !== title) return;
    
    posts.forEach((post, index) => {
      if (post.title === title) {
        post.selected = !post.selected;
        // swap to index before to give
        // the appearance of opening inwards
        const notLeftColumn = $(`#${key}`).offset().left > 200;
        if (index > 0 && notLeftColumn) {
          const swap = posts[index-1];
          posts[index-1] = post;
          posts[index] = swap;
        }
      } 
    })
    this.setState({ posts });
    this.reflowGrid();
  }

  render() {
    const { loading, posts } = this.state; 
    this.reflowGrid()

    return (
      <div>
        <Header />
        <div className="App">
          {
            loading && posts.length < 50
              ? <Loading />
              : <Grid posts={ posts } onSelect={ this.onSelect.bind(this) }/>
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
