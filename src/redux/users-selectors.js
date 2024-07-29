import { createSelector } from 'reselect';

export const getUsers = (state) => state.usersPage.users;
export const getPageSize = (state) => state.usersPage.pageSize;
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getCurrentPageNumber = (state) =>
  state.usersPage.currentPageNumber;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getFollowingInProgress = (state) =>
  state.usersPage.followingInProgress;
export const getIsAuth = (state) => state.auth.isAuth;

//example of a complex selector
export const getUsersSuperSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => true);
});
