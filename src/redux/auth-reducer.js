import { authAPI, profileAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

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
        ...action.payload,
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

const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});
const setUserPhoto = (userPhoto) => ({
  type: SET_USER_PHOTO,
  userPhoto,
});

export const getAuthUserData = () => (dispatch) => {
  authAPI
    .getAuthUserData()
    .then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email, true));
        if (id) return profileAPI.getProfile(id);
      }
    })
    .then((data) => {
      if (data) {
        dispatch(setUserPhoto(data.photos.small));
      }
    });
};

export const logInUser =
  ({ email, password, rememberMe }) =>
  (dispatch) => {
    authAPI.logIn(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    });
  };

export const logOutAuthUser = () => (dispatch) => {
  authAPI.logOut().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
      dispatch(setUserPhoto(null));
    }
  });
};

export default authReducer;
