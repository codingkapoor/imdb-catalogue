import Movie from '../models/movie.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getMovies = (req, res) => {
    let page = 1;
    if(req.query.page)
        page = req.query.page;

    try {
        Movie.getMovies(page, req.query.q).then(movies => {
            logger.info('Getting all movies...');
            res.send(movies);
        });
    } catch(err) {
        logger.error('Error in getting movies - ' + err);
        res.send('Got error in getMovies');
    }
}

controller.getMovieById = (req, res) => {
    const movieId = req.params._id;
    try {
        Movie.getMovieById(movieId).then(movie => {
            logger.info('Getting movie with id ' + movieId);
            res.send(movie);
        });
    } catch(err) {
        logger.error('Error in getting movie - ' + err);
        res.send('Get error in getMovieById');
    }
}

export default controller;
