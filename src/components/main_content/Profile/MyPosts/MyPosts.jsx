import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

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
        props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
    }

    let addPost = () => {
        props.dispatch({ type: "ADD-POST" });
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div className={styles.newPost}>
                <div>
                    <textarea
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