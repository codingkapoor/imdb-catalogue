import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import MoviesIndex from './components/movies_index';
import MovieDetails from './containers/movie_details';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <div className='row'>
                    <Link className="search-title col-lg-12" to="/">IMDB Catalogue</Link>
                </div>
                <Switch>
                    <Route path="/movies/:id" component={ MovieDetails } />
                    <Route path="/movies" component={ MoviesIndex } />
                    <Redirect from="/" to="movies" />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('.container')
);
