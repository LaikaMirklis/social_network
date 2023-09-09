import Friend from './Friend/Friend';
import styles from './FriendsOnline.module.css'



const FriendsOnline = (props) => {
    let friendElements = props.friends.map(f => <Friend name={f.name} photo={f.photo} />)
    return (
        <div className={styles.friendsBlock}>
            <h2>Friends</h2>
            <div className={styles.friends}>{friendElements}</div>
        </div>
    )
}

export default FriendsOnline;