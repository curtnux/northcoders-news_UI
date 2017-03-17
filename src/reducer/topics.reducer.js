import * as types from '../actions/types';

const initialState = {
  data: {},
  loading: false,
  error: null
};

export function topicsReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case types.FETCH_TOPICS_REQUEST:
      newState.loading = true;
      return newState;

    case types.FETCH_TOPICS_SUCCESS:
      newState.data = Object.assign({}, newState.data, action.data); 
      newState.loading = false;
      return newState;

    case types.FETCH_TOPICS_ERROR:
      newState.error = action.data;
      newState.loading = false;
      return newState;

    default:
      return prevState;
  }
}




