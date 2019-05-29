import { combineReducers } from 'redux';

const imageTags = (state = [], action) => {
    if(action.type === 'SET_IMAGE_TAGS') {
        return action.payload;
    }

    return state;
}

// Used to store images returned from the server
const images = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the images tags (e.g. 'Inspirational', 'Calming', 'Energy', etc.)
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    projects: images,
    imageTags,
    tags,
});