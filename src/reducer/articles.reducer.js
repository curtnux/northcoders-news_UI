import * as types from '../actions/types';

const initialState = {
  data: [],
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
  const newState = Object.assign({}, prevState);

  if (action.type === types.FETCH_ARTICLES_REQUEST) {
    newState.loading = true;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    newState.data = action.data;
    newState.loading = false;
  }

  if (action.type === types.FETCH_ARTICLES_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }

  return newState;
}
