import * as types from '../actions/types';
import { map } from 'underscore';

const initialState = {
  data: {},
  byId: {},
  loading: false,
  error: null
};

// const state = {
//   articles: {
//     data: [],
//     loading: false,
//     error: null
//   },
//   topics: {
//     data: [],
//     loading: false,
//     error: null
//   }
// }

export function articlesReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLES_BY_TOPIC_REQUEST:
    case types.FETCH_ARTICLES_REQUEST:
      return Object.assign({}, prevState, {
        loading: true
      });
    case types.FETCH_ARTICLES_BY_TOPIC_SUCCESS:
    case types.FETCH_ARTICLES_SUCCESS:
      return Object.assign({}, prevState, {
        byId: normaliseData(action.data),
        loading: false 
      });
    case types.FETCH_ARTICLES_BY_TOPIC_ERROR:
    case types.FETCH_ARTICLES_ERROR:
      return Object.assign({}, prevState, {
        error: action.error
      });

    default:
      return prevState;
  }
}

function normaliseData (data) {
  return data.reduce(function (acc, item) {
    acc[item._id] = item;
    return acc;
  }, {});
}

export function getTopArticles (state, num) {
  return Object.keys(state.articles.byId).reduce(function (acc, id) {
    return acc.concat(state.articles.byId[id]);
  }, []).sort(function (a, b) {
    return b.votes - a.votes;
  }).slice(0, num); 
}

export function fetchArticlesByTopic (state, belong) {
  return Object.keys(state.articles.byId).reduce(function (acc, id) {
    return acc.concat(state.articles.byId[id]);
  }, []).filter(function (topic) {
    return topic.belongs_to === belong;
  });

}

export default articlesReducer;