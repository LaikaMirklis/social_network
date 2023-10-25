const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    case ADD_POST:
      let newPost = {
        id: 14, //this._state.profilePage.posts.length + 1
        name: "@EnchantingElf",
        avatar:
          "https://i.pinimg.com/564x/b1/c9/d6/b1c9d65cdac7236a40ee4f3e871e622a.jpg",
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    default:
      return state;
  }
};

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;
