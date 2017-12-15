import express from "express";
import movieController from "../controllers/movie.controller"
const router = express.Router()

router.get('/', (req, res) => {
    movieController.getMovies(req, res);
});

router.get('/:_id', (req, res) => {
    movieController.getMovieById(req, res);
});

export default router;
