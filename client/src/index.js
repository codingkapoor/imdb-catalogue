import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import MoviesIndex from './containers/movies_index';
import SearchBar from './containers/search-bar.js';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="row">
            <h3 className="search-title col-lg-12">IMDB Catalogue</h3>
            <SearchBar />
            <MoviesIndex />
        </div>
    </Provider>,
    document.querySelector('.container')
);
