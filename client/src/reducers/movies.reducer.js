import _ from 'lodash';
import { GET_MOVIES } from '../actions';
import isSubset from 'is-subset';

export default function(state = { movies: {}, hasMoreMovies: false, renderCount: 0 }, action) {
    switch (action.type) {
        case GET_MOVIES:
            let hasMoreMovies = true;
            if(action.payload.data.docs.length == 0)
                hasMoreMovies = false;

            const queryParams = new URL(action.payload.request.responseURL).searchParams;
            const searchTerm = queryParams.get('q');
            const page = queryParams.get('page');

            let movies = { ...state.movies, ..._.mapKeys(action.payload.data.docs, '_id') };
            if(page == 1)
                movies = _.mapKeys(action.payload.data.docs, '_id');

            // This property allows to reset the InfiniteScroll if last movies state is not the subset of latest movies state.
            // That is, every time search form is submitted.
            let renderCount = state.renderCount;
            if(!isSubset(movies, state.movies))
                renderCount += 1;

            return { movies, hasMoreMovies, searchTerm, renderCount };
        default:
            return state;
    }
}
