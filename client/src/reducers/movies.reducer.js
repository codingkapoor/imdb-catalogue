import _ from 'lodash';
import { GET_MOVIES } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_MOVIES:
            let hasMoreItems = false;
            if(action.payload.data.docs.length == 0)
                hasMoreItems = false;
            else hasMoreItems = true;

            return {
                movies: _.mapKeys(action.payload.data.docs, '_id'),
                hasMoreItems: hasMoreItems
            };
        default:
            return state;
    }
}
