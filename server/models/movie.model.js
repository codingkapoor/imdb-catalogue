import mongoose from 'mongoose';
import MongoosePaginate from 'mongoose-paginate';

const schema = mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    poster: { type: String, required: true },
    plot: { type: String, required: true }
  }, {collection : 'movies'});

schema.plugin(MongoosePaginate);
schema.index({ title: 'text' });

const model = mongoose.model('movies', schema);


const MovieModel = {};

MovieModel.getMovies = (page, q) => {
    if(q) {
        return model.paginate(
            {
                $text: { $search: q },
                "poster": { $ne: null }
            },
            {
                page: page,
                limit: 10,
                select: { title: 1, year: 1, poster: 1, plot: 1, score: { $meta: "textScore" } },
                sort: { score: { $meta: "textScore" } }
            }
        );
    }
    else {
        return model.paginate(
            {
                "poster": { $ne: null }
            },
            {
                page: page,
                limit: 10,
                select: { title: 1, year: 1, poster: 1, plot: 1 }
            }
        );
    }
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
