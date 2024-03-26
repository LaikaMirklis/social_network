import { authAPI, usersAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PHOTO = "SET_USER_PHOTO";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  userPhoto: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_USER_PHOTO:
      return {
        ...state,
        userPhoto: action.userPhoto,
      };
    default:
      return state;
  }
};

const setAuthUserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: { userId, login, email },
});
const setUserPhoto = (userPhoto) => ({
  type: SET_USER_PHOTO,
  userPhoto,
});

export const getAuthUserData = (userId) => (dispatch) => {
  authAPI
    .me()
    .then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email));
        if (userId) {
          return usersAPI.getProfile(userId);
        }
      }
    })
    .then((data) => {
      if (data) dispatch(setUserPhoto(data.photos.small));
    })
    .catch((error) => {
      console.error("Axios error:", error);
    });
};

export default authReducer;
