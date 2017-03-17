import * as types from '../actions/types';
import { map } from 'underscore';

const initialState = {
  data: {},
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

  switch (action.type) {
    case types.FETCH_ARTICLES_REQUEST:
      newState.loading = true;
      return newState;
    
    case types.FETCH_ARTICLES_SUCCESS:
      newState.data = Object.assign({}, newState.data, action.data);
      newState.loading = false; 
      return newState;
    
    case types.FETCH_ARTICLES_ERROR:
      newState.error = action.data;
      newState.loading = false;
      return newState;
    
    // case types.FETCH_ARTICLES_TYPE:
    //   newState.data = Object.assign({}, newState.data, action.data);

    //   var { data } = newState;

    //   reduce(newState.data, function (topic, i) {
    //     if (topic[i].belongs_to.hasOwnProperty(action.type)) {
          
    //   }
        
    //   }

    default:
      return prevState;
  }
}
