import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "258d2f5d-d2e7-4d71-a4ad-dab9afab74fc",
  },
});

export const authAPI = {
  getAuthUserData() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const usersAPI = {
  getUsers(pageSize = 20, currentPageNumber = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPageNumber}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getUserInfo(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};

export const followAPI = {
  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};
