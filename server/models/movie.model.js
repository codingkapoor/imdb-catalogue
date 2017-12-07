import mongoose from 'mongoose';

const MovieSchema = mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true }
  }, {collection : 'movieDetails'});

let MovieModel = mongoose.model('movieDetails', MovieSchema);

MovieModel.getMovies = () => {
    return MovieModel.find({"poster": { $ne: null }}, { title: 1, year: 1, poster: 1, plot: 1 }).limit(20);
}

MovieModel.getMovieById = (movieId) => {
    return MovieModel.find({ _id: movieId });
}

MovieModel.addMovie = (movie) => {
    return movie.save();
}

MovieModel.deleteMovie = (movieId) => {
    return MovieModel.remove({ _id: movieId });
}

export default MovieModel;
