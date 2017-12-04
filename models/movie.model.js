import mongoose from 'mongoose';

const MovieSchema = mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true }
  }, {collection : 'movieDetails'});

let MovieModel = mongoose.model('movieDetails', MovieSchema);

MovieModel.getMovies = () => {
    return MovieModel.find({}, { title: 1, year: 1 });
}

MovieModel.addMovie = (movie) => {
    return movie.save();
}

MovieModel.deleteMovie = (movieId) => {
    return MovieModel.remove({ _id: movieId });
}

export default MovieModel;
