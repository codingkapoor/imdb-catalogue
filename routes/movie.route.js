import express from "express";
import movieController from "../controllers/movie.controller"
const router = express.Router()

router.get('/', (req, res) => {
    movieController.getMovies(req, res);
});

router.post('/', (req, res) => {
    movieController.addMovie(req, res);
});

router.delete('/', (req, res) => {
    movieController.deleteMovie(req, res);
});

export default router;
