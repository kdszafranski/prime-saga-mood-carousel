import React, { Component } from 'react';
import './App.css';
import SingleImage from '../SingleImage/SingleImage';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {

  state = {
    currentImage: 0,
  }

  componentDidMount() {
    // move to saga and reducer
    this.props.dispatch({ type: 'GET_IMAGES' });
  }

  goPrev = () => {
    console.log('prev');
    let prev = this.state.currentImage - 1;
    if(prev < 0) {
      prev = this.props.reduxState.projects.length - 1;
    }

    this.setState({
      currentImage: prev,
    });
  }

  goNext = () => {
    console.log('next');
    let next = this.state.currentImage + 1;
    if(next >= this.props.reduxState.projects.length) {
      next = 0;
    }

    this.setState({
      currentImage: next,
    });
  }

  showImage = () => {
    if(this.props.reduxState.projects) {
      if(this.props.reduxState.projects.length > 0) { 
        return <SingleImage imageData={this.props.reduxState.projects[this.state.currentImage]} />
      } else {
        return <div>NO REDUX</div>
      }
    } else {
      return <div>NO Images Loaded</div>
    }
  }


  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        
        {/* <div>Redux: {JSON.stringify(this.props.reduxState)} </div> */}

        {this.showImage()}
        
        <button onClick={this.goPrev}>Prevous</button>
        <button onClick={this.goNext}>Next</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(App);
