import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieById } from '../actions';

class MovieDetails extends Component {
    componentDidMount() {
        this.props.getMovieById('569190ca24de1e0ce2dfcd4f');
    }

    render() {
        if(this.props.movie) {
            return (
                <div>
                    Page for movie details! Id: ${ this.props.movie[0]._id }
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

function mapStateToProps(state) {
    return {
        movie: state.moviesPerPage.movie,
    };
}

export default connect(mapStateToProps, { getMovieById })(MovieDetails);
