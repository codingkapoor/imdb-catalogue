import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

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
        const releaseDate = new Date(movie.released);
        return (
            <div className='movie-details'>
                <img src={ movie.poster } className='movie-img' />
                <Table striped>
                    <tbody>
                        <tr>
                            <th scope='row' className='movie-details-th'>Title:</th>
                            <td className='movie-details-td'>{ movie.title }</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>Year:</th>
                            <td className='movie-details-td'>{ movie.year }</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>Rated:</th>
                            <td className='movie-details-td'>{ movie.rated }</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>Release:</th>
                            <td className='movie-details-td'>{ releaseDate.toDateString() }</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>Runtime:</th>
                            <td className='movie-details-td'>{ movie.runtime } minutes</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>Genres:</th>
                            <td className='movie-details-td'>{ movie.genres.join(', ') }</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>Director:</th>
                            <td className='movie-details-td'>{ movie.director }</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>Writers:</th>
                            <td className='movie-details-td'>{ movie.writers.join(', ') }</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>Actors:</th>
                            <td className='movie-details-td'>{ movie.actors.join(', ') }</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>Plot:</th>
                            <td className='movie-details-td'>{ movie.plot }</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>IMDB:</th>
                            <td className='movie-details-td'>Rating: { movie.imdb.rating }, Votes: { movie.imdb.votes }</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>Metacritic:</th>
                            <td className='movie-details-td'>{ movie.metacritic }</td>
                        </tr>
                        <tr>
                            <th scope='row' className='movie-details-th'>Awards:</th>
                            <td className='movie-details-td'>{ movie.awards.text }</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
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
