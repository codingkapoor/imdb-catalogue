import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardColumns } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroller';

import { getMovies } from '../actions';

class MoviesIndex extends Component {
    constructor() {
        super();
        this.loadMovies = this.loadMovies.bind(this);
    }

    componentDidMount() {
        this.loadMovies(1);
    }

    loadMovies(page) {
        this.props.getMovies(page, this.props.searchTerm);
    }

    renderMovies() {
        return _.map(this.props.movies, movie => {
            return (
                <Card key={ movie._id }>
                    <CardImg top className="movie-card-img" src={ movie.poster } alt="Movie Poster" />
                    <CardBody>
                        <CardTitle>{ movie.title }</CardTitle>
                        <CardSubtitle>{ movie.year }</CardSubtitle>
                        <CardText>{ movie.plot }</CardText>
                        <Button>View More</Button>
                    </CardBody>
                </Card>
            );
        });
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;

        return (
            <InfiniteScroll
                key={ this.props.renderCount }
                pageStart={ 1 }
                loadMore={ this.loadMovies }
                hasMore={ this.props.hasMoreMovies }
                loader={ loader }>

                <CardColumns>
                    { this.renderMovies() }
                </CardColumns>
            </InfiniteScroll>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.moviesPerPage.movies,
        hasMoreMovies: state.moviesPerPage.hasMoreMovies,
        searchTerm: state.moviesPerPage.searchTerm,
        renderCount: state.moviesPerPage.renderCount
    };
}

export default connect (mapStateToProps, { getMovies })(MoviesIndex);
