import Movie from '../models/movie.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getMovies = (req, res) => {
    let page = 1;
    if(req.query.page)
        page = req.query.page;

    try {
        console.log(Movie);
        Movie.getMovies(page).then(movies => {
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

controller.addMovie = (req, res) => {
    const movieToAdd = Movie({
        title: req.body.title,
        year: req.body.year
    });
    try {
        Movie.addMovie(movieToAdd).then(savedMovie => {
            logger.info('Adding movie...');
            res.send('added: ' + savedMovie);
        });
    } catch(err) {
        logger.error('Error in inserting movie - ' + err);
        res.send('Got error in addMovie');
    }
}

controller.deleteMovie = async (req, res) => {
    const movieId = req.body._id;
    try {
        Movie.deleteMovie(movieId).then(deletedMovie => {
            logger.info('Deleted movie - ' + deletedMovie);
            res.send('Movie successfully deleted');
        });
    } catch(err) {
        logger.error('Failed to delete movie - ' + err);
        res.send('Delete failed');
    }
}

export default controller;
