import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    let t = props.t;

    let postElements = props.profilePage.posts.toReversed().map(p =>
        <Post
            key={p.id}
            name={p.name}
            message={p.message}
            likeCount={p.likeCount}
            avatar={p.avatar}

        />)

    let newPostText = props.profilePage.newPostText;

    let onPostChange = (e) => { // e - event
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    let onAddPost = () => {
        props.addPost();
    };

    let sendIfKeyPress = (event) => {
        if (event.key === 'Enter' && event.ctrlKey) {  //Ctrl+Enter
            event.preventDefault();
            onAddPost();
        }
    };

    return (
        <div className={styles.postsBlock}>
            <h3>{t('profilePage.myPosts')}</h3>
            <div className={styles.newPost}>
                <div>
                    <textarea
                        placeholder={t('profilePage.textArea')}
                        value={newPostText}
                        onChange={onPostChange}
                        onKeyDown={sendIfKeyPress} />
                </div >
                <div>
                    <button onClick={onAddPost}>{t('profilePage.addPostButton')}</button>
                </div >
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div >
    )
}

export default MyPosts;