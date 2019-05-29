import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from '@redux-saga/core/effects';

// my reducers
import reducers from './redux/reducers';



/****** SAGAS ******/

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_IMAGES', getImages);
    yield takeEvery('GET_SINGLE_IMAGE_TAGS', getSingleImageTags)
}

function* getSingleImageTags(action, payload) {
    console.log("in single image tags saga");
    try {
        const tags = yield axios.get(`/api/tags/${payload.imageId}`);
    } catch {

    }
}

// gets images from the server, stores in reducer
function* getImages(action, payload) {
    console.log("in get images saga");
    try {
        const result = yield axios.get('/api/images');

        yield put({ type: 'SET_IMAGES', payload: result.data});
    } catch {
        console.log("Error in get images");
    }
}




// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    reducers,
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
