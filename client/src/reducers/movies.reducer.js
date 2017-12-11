import _ from 'lodash';
import { GET_MOVIES } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_MOVIES:
            return _.mapKeys(action.payload.data.docs, '_id');
        default:
            return state;
    }
}
