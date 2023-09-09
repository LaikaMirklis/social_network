import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postElements = props.posts.map(p => <Post name={p.name} message={p.message} likeCount={p.likeCount} avatar={p.avatar} />)

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div className={styles.newPost}>
                <div>
                    <textarea ref={newPostElement}></textarea>
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