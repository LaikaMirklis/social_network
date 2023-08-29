import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ava from "./../../avatar.png";
import like from "./like.svg";
import styles from "./Post.module.css"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";


const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src={ava} alt="avatar" className={styles.avatar} />
            {props.message}
            <span>
                <FontAwesomeIcon icon={faThumbsUp} />
                {props.likeCount}
            </span>
        </div>
    )
}


export default Post;
