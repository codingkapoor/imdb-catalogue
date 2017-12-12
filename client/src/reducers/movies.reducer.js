import _ from 'lodash';
import { GET_MOVIES } from '../actions';

export default function(state = { movies: {}, hasMoreMovies: false }, action) {
    switch (action.type) {
        case GET_MOVIES:
            let hasMoreMovies = true;
            if(action.payload.data.docs.length == 0)
                hasMoreMovies = false;

            const queryParams = new URL(action.payload.request.responseURL).searchParams;
            const q = queryParams.get('q');
            const page = queryParams.get('page');

            let movies = { ...state.movies, ..._.mapKeys(action.payload.data.docs, '_id') };
            if(page == 1)
                movies = _.mapKeys(action.payload.data.docs, '_id');

            return { movies, hasMoreMovies, q };
        default:
            return state;
    }
}
