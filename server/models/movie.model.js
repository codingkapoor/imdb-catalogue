import mongoose from 'mongoose';
import MongoosePaginate from 'mongoose-paginate';

const MovieSchema = mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true }
  }, {collection : 'movieDetails'});

MovieSchema.plugin(MongoosePaginate);

const MovieModel = mongoose.model('movieDetails', MovieSchema);


const Movie = {};

Movie.getMovies = (page) => {
    return MovieModel.paginate({"poster": { $ne: null }}, { page: page, limit: 10, select: 'title year poster plot' });
}

Movie.getMovieById = (movieId) => {
    return MovieModel.find({ _id: movieId });
}

Movie.addMovie = (movie) => {
    return MovieModel.save();
}

Movie.deleteMovie = (movieId) => {
    return MovieModel.remove({ _id: movieId });
}

export default Movie;
