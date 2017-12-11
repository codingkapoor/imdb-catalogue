import { combineReducers } from 'redux';
import MoviesReducer from './movies.reducer';

const rootReducer = combineReducers({
    moviesPerPage: MoviesReducer
});

export default rootReducer;
