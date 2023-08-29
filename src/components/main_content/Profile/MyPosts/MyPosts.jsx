import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, how are you?' likeCount="20" />
            <Post message="It's my first post." likeCount="45" />
        </div >
    )
}

export default MyPosts;