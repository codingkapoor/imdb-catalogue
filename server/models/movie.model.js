import mongoose from 'mongoose';
import MongoosePaginate from 'mongoose-paginate';

class Movie {

    constructor () {
        const MovieSchema = mongoose.Schema({
            title: { type: String, required: true },
            year: { type: Number, required: true }
          }, {collection : 'movieDetails'});

        MovieSchema.plugin(MongoosePaginate);

        this.MovieModel = mongoose.model('movieDetails', MovieSchema);
    }

    getMovies = (page) => {
        return this.MovieModel.paginate({"poster": { $ne: null }}, { page: page, limit: 10, select: 'title year poster plot' });
    }

    getMovieById = (movieId) => {
        return this.MovieModel.find({ _id: movieId });
    }

    addMovie = (movie) => {
        return this.MovieModel.save();
    }

    deleteMovie = (movieId) => {
        return this.MovieModel.remove({ _id: movieId });
    }
}

export default new Movie();
