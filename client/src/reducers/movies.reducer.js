import _ from 'lodash';
import { GET_MOVIES } from '../actions';

export default function(state = { movies: {}, hasMoreMovies: false }, action) {
    switch (action.type) {
        case GET_MOVIES:
            let hasMoreMovies = false;
            if(action.payload.data.docs.length == 0)
                hasMoreMovies = false;
            else hasMoreMovies = true;

            return {
                movies: { ...state.movies, ..._.mapKeys(action.payload.data.docs, '_id') },
                hasMoreMovies: hasMoreMovies
            };
        default:
            return state;
    }
}
