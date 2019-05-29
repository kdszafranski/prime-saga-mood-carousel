import React, { Component } from 'react';
import './App.css';
import SingleImage from '../SingleImage/SingleImage';
import axios from 'axios';

class App extends Component {

  state = {
    images: [],
    currentImage: 0,
  }

  componentDidMount() {
    axios.get('/api/images')
      .then( (response) => {
        this.setState({
          images: response.data,
        });
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  goPrev = () => {
    console.log('prev');
    let prev = this.state.currentImage - 1;
    if(prev < 0) {
      prev = this.state.images.length - 1;
    }

    this.setState({
      currentImage: prev,
    });
  }

  goNext = () => {
    console.log('next');
    let next = this.state.currentImage + 1;
    if(next >= this.state.images.length) {
      next = 0;
    }

    this.setState({
      currentImage: next,
    });
  }

  showImage = () => {
    if(this.state.images.length > 0) {
      return <SingleImage imageData={this.state.images[this.state.currentImage]} />
    } else {
      return <div>NO Images Loaded</div>
    }
  }


  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        
        {JSON.stringify(this.state.images)}

        {this.showImage()}
        
        <button onClick={this.goPrev}>Prevous</button>
        <button onClick={this.goNext}>Next</button>
      </div>
    );
  }
}

export default App;
