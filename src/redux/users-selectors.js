export const getUsers = (state) => {
  // return state.usersPage.users;
  return state.usersPage.users.filter((u) => true);
};

export const getTempSavedUsers = (state) => {
  return state.usersPage.users.filter((u) => true); // that are in tempsavedArray
};

export const getPageSize = (state) => state.usersPage.pageSize;
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getCurrentPageNumber = (state) =>
  state.usersPage.currentPageNumber;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getFollowingInProgress = (state) =>
  state.usersPage.followingInProgress;
export const getIsAuth = (state) => state.auth.isAuth;

export const countSomethingDifficult = (state) => {
  debugger;
  //for... math... big arrays
  let count = 23;
  return count;
};
