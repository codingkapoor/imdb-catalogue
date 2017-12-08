import mongoose from 'mongoose';
import MongoosePaginate from 'mongoose-paginate';

const MovieSchema = mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true }
  }, {collection : 'movieDetails'});

MovieSchema.plugin(MongoosePaginate);

const model = mongoose.model('movieDetails', MovieSchema);


const MovieModel = {};

MovieModel.getMovies = (page) => {
    return model.paginate({"poster": { $ne: null }}, { page: page, limit: 10, select: 'title year poster plot' });
}

MovieModel.getMovieById = (movieId) => {
    return model.find({ _id: movieId });
}

MovieModel.addMovie = (movie) => {
    return model.save();
}

MovieModel.deleteMovie = (movieId) => {
    return model.remove({ _id: movieId });
}

export default MovieModel;
