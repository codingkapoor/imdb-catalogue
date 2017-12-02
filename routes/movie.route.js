import express from "express";
import movieController from "../controllers/movie.controller"
const router = express.Router()

router.get('/allmovies', (req, res) => {
    movieController.getAll(req, res);
});

router.post('/addmovie', (req, res) => {
    movieController.addMovie(req, res);
});

router.delete('/deletemovie', (req, res) => {
    movieController.deleteMovie(req, res);
});

export default router;
