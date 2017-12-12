import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';

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
