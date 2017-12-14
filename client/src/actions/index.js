import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_BY_ID = 'GET_MOVIES_BY_ID';

const ROOT_URL = 'http://localhost:3001';

export const getMovies = (page, q) => {
    let query = `${ROOT_URL}/movies?page=${page}`;
    if(q) query += `&q=${q}`;

    const req = axios.get(query);

    return {
        type: GET_MOVIES,
        payload: req
    };
}

export const getMovieById = (id) => {
    let query = `${ROOT_URL}/movies/${id}`;
    const req = axios.get(query);

    return {
        type: GET_MOVIE_BY_ID,
        payload: req
    }
}
