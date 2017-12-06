import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';

class MoviesIndex extends Component {

    componentDidMount() {
        this.props.getMovies();
    }

    renderMovies() {
        return _.map(this.props.movies, movie => {
            return (
                <li className="list-group-item" key={ movie._id }>
                    { movie.title }
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h3>Movies</h3>
                <ul className="list-group">
                    { this.renderMovies() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { movies: state.movies };
}

export default connect (mapStateToProps, { getMovies })(MoviesIndex);
