import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '258d2f5d-d2e7-4d71-a4ad-dab9afab74fc',
  },
});

export const authAPI = {
  getAuthUserData() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  logIn(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data);
  },
  logOut() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};

export const usersAPI = {
  getUsers(pageSize = 20, currentPageNumber = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPageNumber}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => response.data.resultCode);
  },
};
