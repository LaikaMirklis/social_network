import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Post.module.css"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.userInfo}><img src={props.avatar} alt="avatar" className={styles.avatar} />
                {props.name}
            </div>
            <div className={styles.message}>{props.message}</div>
            <span>
                <FontAwesomeIcon icon={faThumbsUp} />{" "}
                {props.likeCount}
            </span>
        </div>
    )
}


export default Post;
