import Movie from '../models/movie.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getMovies = async (req, res) => {
    try {
        const movies = await Movie.getMovies();
        logger.info('Getting all movies...');
        res.send(movies);
    }
    catch(err) {
        logger.error('Error in getting movies - ' + err);
        res.send('Got error in getMovies');
    }
}

controller.getMovieById = async (req, res) => {
    const movieId = req.params._id;
    try {
        const movie = await Movie.getMovieById(movieId);
        logger.info('Getting movie with id ' + movieId);
        res.send(movie);
    }
    catch(err) {
        logger.error('Error in getting movie - ' + err);
        res.send('Get error in getMovieById');
    }
}

controller.addMovie = async (req, res) => {
    const movieToAdd = Movie({
        title: req.body.title,
        year: req.body.year
    });
    try {
        const savedMovie = await Movie.addMovie(movieToAdd);
        logger.info('Adding movie...');
        res.send('added: ' + savedMovie);
    }
    catch(err) {
        logger.error('Error in inserting movie - ' + err);
        res.send('Got error in addMovie');
    }
}

controller.deleteMovie = async (req, res) => {
    const movieId = req.body._id;
    try {
        const deletedMovie = await Movie.deleteMovie(movieId);
        logger.info('Deleted movie - ' + deletedMovie);
        res.send('Movie successfully deleted');
    }
    catch(err) {
        logger.error('Failed to delete movie - ' + err);
        res.send('Delete failed');
    }
}

export default controller;
