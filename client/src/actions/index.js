import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';

const ROOT_URL = 'http://localhost:3001';

export const getMovies = (page) => {
    const req = axios.get(`${ROOT_URL}/movies?page=${page}`);

    return {
        type: GET_MOVIES,
        payload: req
    };
}
