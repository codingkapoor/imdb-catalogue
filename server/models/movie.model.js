import mongoose from 'mongoose';
import MongoosePaginate from 'mongoose-paginate';

let Movie = () => {}

const MovieSchema = mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true }
  }, {collection : 'movieDetails'});

MovieSchema.plugin(MongoosePaginate);

let MovieModel = mongoose.model('movieDetails', MovieSchema);

Movie.prototype.getMovies = (page) => {
    return MovieModel.paginate({"poster": { $ne: null }}, { page: page, limit: 10, select: 'title year poster plot' });
}

Movie.prototype.getMovieById = (movieId) => {
    return MovieModel.find({ _id: movieId });
}

Movie.prototype.addMovie = (movie) => {
    return movie.save();
}

Movie.prototype.deleteMovie = (movieId) => {
    return MovieModel.remove({ _id: movieId });
}

export default new Movie();
