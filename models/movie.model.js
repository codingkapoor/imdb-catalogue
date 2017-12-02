import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const MovieSchema = mongoose.Schema({
    _id: { type: ObjectId, unique: true },
    title: { type: String, required: true },
    year: { type: Number, required: true }
  }, {collection : 'movieDetails'});

let MovieModel = mongoose.model('movieDetails', MovieSchema);

MovieModel.getAll = () => {
    return MovieModel.find({}, { title: 1, year: 1 });
}

MovieModel.addMovie = (movieToAdd) => {
    return movieToAdd.save();
}

MovieModel.removeMovie = (movieId) => {
    return MovieModel.remove({_id: movieId});
}

export default MovieModel;
