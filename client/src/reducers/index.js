import { combineReducers } from 'redux';
import MoviesReducer from './movies.reducer';

const rootReducer = combineReducers({
    movies: MoviesReducer
});

export default rootReducer;
