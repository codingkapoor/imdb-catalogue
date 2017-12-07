import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardColumns } from 'reactstrap';

import { getMovies } from '../actions';

class MoviesIndex extends Component {

    componentDidMount() {
        this.props.getMovies();
    }

    renderMovies() {
        return _.map(this.props.movies, movie => {
            return (
                <Card key={ movie._id }>
                    <CardImg top width="50%" height="400px" src={ movie.poster } alt="Movie Poster" />
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
        return (
            <CardColumns>
                { this.renderMovies() }
            </CardColumns>
        );
    }
}

function mapStateToProps(state) {
    return { movies: state.movies };
}

export default connect (mapStateToProps, { getMovies })(MoviesIndex);
