import * as types from '../actions/types';
import { normaliseData } from '../helper';

const initialState = {
  users: {},
  loading: false,
  error: null
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return Object.assign({}, prevState, {
          loading: true, error: null
      });
    case types.FETCH_USERS_SUCCESS:
       return Object.assign({}, prevState, {
          loading: false,
          users: normaliseData(action.data)
       });
    case types.FETCH_USERS_ERROR:
      return Object.assign({}, prevState, {
          loading: false,
          error: action.error
      });
    default:
      return prevState;
  }
}

