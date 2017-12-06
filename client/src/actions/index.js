import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';

export const getMovies = () => {
    const req = axios.get('http://localhost:3001/movies');

    return {
        type: GET_MOVIES,
        payload: req
    };
}
