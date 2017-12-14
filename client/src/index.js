import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import MoviesIndex from './components/movies_index';
import MovieDetails from './containers/movie_details';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div className="row">
                <h3 className="search-title col-lg-12">IMDB Catalogue</h3>
                <Switch>
                    <Route path="/md" component={ MovieDetails } />
                    <Route path="/" component={ MoviesIndex } />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('.container')
);
