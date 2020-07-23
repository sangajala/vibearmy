import videos from '../apis/videos';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_VIDEO,
  FETCH_VIDEOS,
  FETCH_VIDEO,
  DELETE_VIDEO,
  EDIT_VIDEO
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createVideo = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await videos.post('/videos', { ...formValues, userId });

  dispatch({ type: CREATE_VIDEO, payload: response.data });
  history.push('/');
};

export const fetchVideos = () => async dispatch => {
  const response = await videos.get('/videos');

  dispatch({ type: FETCH_VIDEOS, payload: response.data });
};

export const fetchVideo = id => async dispatch => {
  const response = await videos.get(`/videos/${id}`);

  dispatch({ type: FETCH_VIDEO, payload: response.data });
};

export const editVideo = (id, formValues) => async dispatch => {
  const response = await videos.patch(`/videos/${id}`, formValues);

  dispatch({ type: EDIT_VIDEO, payload: response.data });
  history.push('/');
};

export const deleteVideo = id => async dispatch => {
  await videos.delete(`/videos/${id}`);

  dispatch({ type: DELETE_VIDEO, payload: id });
  history.push('/');
};
