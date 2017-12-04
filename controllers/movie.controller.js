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

controller.addMovie = async (req, res) => {
    let movieToAdd = Movie({
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
  let movieId = req.body.id;
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
