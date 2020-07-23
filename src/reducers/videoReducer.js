import _ from 'lodash';
import {
  FETCH_VIDEO,
  FETCH_VIDEOS,
  CREATE_VIDEO,
  EDIT_VIDEO,
  DELETE_VIDEO
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_VIDEO:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_VIDEO:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_VIDEO:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_VIDEO:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
