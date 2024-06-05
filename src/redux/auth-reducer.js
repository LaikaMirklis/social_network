import { authAPI, profileAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PHOTO = "SET_USER_PHOTO";
const DELETE_USER_DATA = "DELETE_USER_DATA";

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
    case DELETE_USER_DATA:
      return {
        ...state,
        userId: null,
        login: null,
        email: null,
        isAuth: false,
        userPhoto: null,
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
const deleteAuthUserData = () => ({
  type: DELETE_USER_DATA,
});

export const getAuthUserData = () => (dispatch) => {
  authAPI
    .getAuthUserData()
    .then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email));
        if (id) return profileAPI.getProfile(id);
      }
    })
    .then((data) => {
      if (data) {
        dispatch(setUserPhoto(data.photos.small));
      }
    });
};

export const logInUser = (loginData) => (dispatch) => {
  authAPI
    .logIn(loginData)
    .then((data) => {
      if (data.resultCode === 0) {
        return profileAPI.getProfile(data.data.userId);
      }
    })
    .then((data) => {
      if (data) {
        let { fullName, userId, photos } = data;
        dispatch(setAuthUserData(userId, fullName));
        dispatch(setUserPhoto(photos.small));
      }
    });
};

export const logOutAuthUser = () => (dispatch) => {
  authAPI.logOut().then((resultCode) => {
    if (resultCode === 0) {
      dispatch(deleteAuthUserData());
    }
  });
};

export default authReducer;
