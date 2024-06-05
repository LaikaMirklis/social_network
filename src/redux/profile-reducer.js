import { profileAPI } from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  profile: null,
  status: '',
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getUserProfile = (userId) => (dispatch) => {
  if (userId === 0) {
    dispatch(setUserProfile(null));
    dispatch(setStatus(''));
  } else {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  }
};
export const getUserStatus = (userId) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  profileAPI.getStatus(userId).then((status) => {
    if (status) dispatch(setStatus(status));
    dispatch(toggleIsFetching(false));
  });
};
export const updateUserStatus = (status) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  profileAPI.updateStatus(status).then((resultCode) => {
    if (resultCode === 0) dispatch(setStatus(status));
    dispatch(toggleIsFetching(false));
  });
};

export default profileReducer;
