import React from 'react';

import SearchBar from '../containers/search-bar';
import MoviesList from '../containers/movies_list';

const MoviesIndex = () => {
    return (
        <div className='row'>
            <SearchBar />
            <MoviesList />
        </div>
    );
}

export default MoviesIndex;
