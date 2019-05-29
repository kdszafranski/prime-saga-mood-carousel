import React, { Component } from 'react';
import axios from 'axios';

class SingleImage extends Component {

    //   state = {
    //     images: [],
    //     currentImage: 0,
    //   }

    // componentDidMount() {
    //     // axios.get('/api/images')
    //     //   .then( (response) => {
    //     //     this.setState({
    //     //       images: response.data,
    //     //     });
    //     //   })
    //     //   .catch( (error) => {
    //     //     console.log(error);
    //     //   });
    // }

    // Renders the entire app on the DOM
    render() {
        return (
            <>
                <img src={`${this.props.imageData.path}`} alt={`${this.props.imageData.title}`} />
                <h1>{this.props.imageData.title}</h1>
            </>
        );
    }
}

export default SingleImage;
