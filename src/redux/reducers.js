import { combineReducers } from 'redux';

const testing = (state = "hello", action) => {
    if(action.type === 'TEST') {
        return "Works!";
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
    testing,
    tags,
});