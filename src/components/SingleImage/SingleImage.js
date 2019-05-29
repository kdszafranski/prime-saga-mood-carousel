import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleImage extends Component {

    componentDidMount() {
        console.log('singleimage mounted');
        this.props.dispatch({ type: 'GET_SINGLE_IMAGE_TAGS', payload: this.props.imageData.id });
    }

    // Renders the entire app on the DOM
    render() {
        return (
            <>
                {JSON.stringify(this.props.imageData)}
                <img src={`${this.props.imageData.path}`} alt={`${this.props.imageData.title}`} />
                <h1>{this.props.imageData.title}</h1>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect()(SingleImage);
