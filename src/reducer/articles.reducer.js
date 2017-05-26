import * as types from '../actions/types';
import { normaliseData } from '../helper';

const initialState = {
    byId: {},
    loading: false,
    error: null
};

export default function (prevState = initialState, action) {
    switch (action.type) {

        case types.FETCH_ALL_ARTICLES_REQUEST:
        case types.FETCH_TOPIC_ARTICLES_REQUEST:
        case types.VOTE_ARTICLE_REQUEST:
            return Object.assign({}, prevState, {
                loading: true, 
                error: null
            });

        case types.FETCH_ALL_ARTICLES_SUCCESS:
        case types.FETCH_TOPIC_ARTICLES_SUCCESS: 
            return Object.assign({}, prevState, {
                byId: normaliseData(action.data),
                loading: false,
                error: null
            });

        case types.VOTE_ARTICLE_SUCCESS: {
        const newState = Object.assign({}, prevState);
        newState.byId = Object.assign({}, newState.byId);
        
        action.vote === 'up' 
        ? newState.byId[action.article_id].votes++ 
        : newState.byId[action.article_id].votes--;
        
        newState.loading = false;
        newState.error = null;
        
        return newState;
        }

        case types.FETCH_ALL_ARTICLES_ERROR:
        case types.FETCH_TOPIC_ARTICLES_ERROR:
        case types.VOTE_ARTICLE_ERROR:
            return Object.assign({}, prevState, {
                error: action.error,
                loading: false
            });

        default:
            return prevState;
    }
}