import * as types from '../actions/types';
import { normaliseData } from '../helper';

const initialState = {
    byId: {},
    loading: false,
    error: null
};

export default function (prevState = initialState, action) {
    
    switch (action.type) {

        case types.FETCH_ARTICLE_REQUEST:
        case types.VOTE_COMMENT_REQUEST:
        case types.POST_COMMENT_REQUEST:
        case types.DELETE_COMMENT_REQUEST:
            return Object.assign({}, prevState, {
                loading: true, error: null
            });

        case types.FETCH_ARTICLE_SUCCESS:
            return Object.assign({}, prevState, {
                byId: normaliseData(action.data),    
                loading: false
            });
        
        case types.POST_COMMENT_SUCCESS: {
            const newState = Object.assign({}, prevState);
            const newData = Object.assign({}, newState.byId);

            newData[action.data._id] = action.data;
            newState.byId = newData;
            newState.loading = false;
            return newState;
        }

        case types.VOTE_COMMENT_SUCCESS: {
            const newState = Object.assign({}, prevState);
            const newData = Object.assign({}, newState.byId);
            if (action.vote === 'up') {
                newData[action.id].votes++;
            } else if (action.vote === 'down') {
                newData[action.id].votes--;
            }
                newState.loading = false,
                newState.byId = newData;
            return newState;
        }

        case types.DELETE_COMMENT_SUCCESS: {
            const newState = Object.assign({}, prevState);
            const newData = Object.assign({}, newState.byId);

            delete newData[action.comment_id];
            newState.byId = newData;
            newState.loading = false;
            return newState;
        }

        case types.FETCH_ARTICLE_ERROR:
        case types.VOTE_COMMENT_ERROR:
        case types.DELETE_COMMENT_ERROR:
            return Object.assign({}, prevState, {
                error: action.error,
                loading: false
            });

        default:
            return prevState;
    }
}
