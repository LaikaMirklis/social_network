import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profile-reducer";


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postElements = props.posts.toReversed().map(p =>
        <Post
            name={p.name}
            message={p.message}
            likeCount={p.likeCount}
            avatar={p.avatar}
        />)


    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div className={styles.newPost}>
                <div>
                    <textarea
                        placeholder="What's happening?"
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange} />
                </div >
                <div>
                    <button onClick={addPost}>Add post</button>
                </div >
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div >
    )
}

export default MyPosts;