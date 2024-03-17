import { usersAPI } from "../api/api";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  profile: null,
  status: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.statusText,
      };
    default:
      return state;
  }
};

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setUserStatus = (statusText) => ({
  type: SET_USER_STATUS,
  statusText,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    if (userId === 0) {
      dispatch(setUserProfile(null));
      dispatch(setUserStatus(null));
    } else {
      usersAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
      });
    }
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    usersAPI.getStatus(userId).then((status) => {
      if (status) dispatch(setUserStatus(status));
    });
  };
};

export const changeUserStatus = (newStatusText) => {
  return (dispatch) => {
    usersAPI.changeStatus({ status: newStatusText }).then((resultCode) => {
      if (resultCode === 0) dispatch(setUserStatus(newStatusText));
    });
  };
};

export default profileReducer;
