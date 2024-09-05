import { authAPI, profileAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const SET_FORM_ERROR = 'SET_FORM_ERROR';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  userPhoto: null,
  formError: null,
  captchaUrl: null,
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
    case SET_FORM_ERROR:
      return {
        ...state,
        formError: action.formError,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
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
const setFormError = (formError) => ({
  type: SET_FORM_ERROR,
  formError,
});
const setCaptchaUrl = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  captchaUrl,
});

export const getAuthUserData = () => (dispatch) => {
  return authAPI
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
  ({ email, password, rememberMe, captcha }) =>
  (dispatch) => {
    authAPI.logIn(email, password, rememberMe, captcha).then((data) => {
      const { resultCode, messages } = data;
      if (resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let message = messages.length > 0 ? messages[0] : 'Some error';
        dispatch(setFormError(message));
        if (resultCode === 10) {
          authAPI.getCaptcha().then((url) => dispatch(setCaptchaUrl(url)));
        }
      }
    });
  };

export const clearErrorData = () => (dispatch) => {
  dispatch(setFormError(null));
  dispatch(setCaptchaUrl(null));
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
