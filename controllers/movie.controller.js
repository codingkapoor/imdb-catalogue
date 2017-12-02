import Movie from '../models/movie.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const movies = await Movie.getAll();
        logger.info('sending all movies...');
        res.send(movies);
    }
    catch(err) {
        logger.error('Error in getting movies- ' + err);
        res.send('Got error in getAll');
    }
}

controller.addMovie = async (req, res) => {
    let movieToAdd = Movie({
        title: req.body.title,
        year: req.body.year
    });
    try {
        const savedMovie = await Movie.addMovie(movieToAdd);
        logger.info('Adding car...');
        res.send('added: ' + savedMovie);
    }
    catch(err) {
        logger.error('Error in inserting movie- ' + err);
        res.send('Got error in addMovie');
    }
}

controller.deleteMovie = async (req, res) => {
    let movieId = req.body.id;
    try{
        const removedMovie = await Movie.removeMovie(movieId);
        logger.info('Deleted movie- ' + removedMovie);
        res.send('Movie successfully deleted');
    }
    catch(err) {
        logger.error('Failed to delete movie- ' + err);
        res.send('Delete failed..!');
    }
}

export default controller;
