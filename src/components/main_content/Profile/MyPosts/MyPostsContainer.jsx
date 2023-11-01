import React from "react";
import MyPosts from "./MyPosts";

import { addPostCreator, updateNewPostTextCreator } from "../../../../redux/profile-reducer";


const MyPostsContainer = (props) => {
    let t = props.t;

    let state = props.store.getState().profilePage;

    let onPostChange = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    }

    let onAddPost = () => {
        props.store.dispatch(addPostCreator());
    };

    return (
        <MyPosts
            t={t}
            profilePage={state}
            updateNewPostText={onPostChange}
            addPost={onAddPost}
        />
    )
}

export default MyPostsContainer;