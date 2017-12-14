import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieById } from '../actions';

class MovieDetails extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getMovieById(id);
    }

    render() {
        if(!this.props.movie)
            return <div></div>;

        const movie = this.props.movie;
        return (
            <ul>
                <img src={ movie.poster } />
                <li>
                    <b>Title:</b> { movie.title }
                </li>
                <li>
                    <b>Year:</b> { movie.year }
                </li>
                <li>
                    <b>Rated:</b> { movie.rated }
                </li>
                <li>
                    <b>Released:</b> { movie.released }
                </li>
                <li>
                    <b>Runtime:</b> { movie.runtime }
                </li>
                <li>
                    <b>Genres:</b> { movie.genres.toString() }
                </li>
                <li>
                    <b>Director:</b> { movie.director }
                </li>
                <li>
                    <b>Writers:</b> { movie.writers.toString() }
                </li>
                <li>
                    <b>Actors:</b> { movie.actors.toString() }
                </li>
                <li>
                    <b>Plot:</b> { movie.plot }
                </li>
                <li>
                    <b>IMDB:</b> { movie.imdb.rating }, { movie.imdb.votes }
                </li>
                <li>
                    <b>Metacritic:</b> { movie.metacritic }
                </li>
                <li>
                    <b>Awards:</b> { movie.awards.text }
                </li>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    let movie = state.moviesPerPage.movie;
    if(state.moviesPerPage.movie)
        movie = movie[0];

    return { movie };
}

export default connect(mapStateToProps, { getMovieById })(MovieDetails);
