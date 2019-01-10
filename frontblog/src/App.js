import React, { Component } from 'react';
import PostForm from './components/postForm';
import AllPost from './components/allPost'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm/>
        <AllPost />
      </div>
    );
  }
}

export default App;
