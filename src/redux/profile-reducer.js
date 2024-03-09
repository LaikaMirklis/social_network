import { usersAPI } from "../api/api";

const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    if (userId === 0) dispatch(setUserProfile(null));
    else {
      usersAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
      });
    }
  };
};

export default profileReducer;
