import Friend from './Friend/Friend';
import styles from './FriendsOnline.module.css'

const FriendsOnline = (props) => {
    let t = props.t;
    let friendElements = props.friends.map(f =>
        <Friend
            key={f.id}
            name={f.name}
            photo={f.photo}
        />)
    return (
        <div className={styles.friendsBlock}>
            <h3>{t('navbar.friends')}</h3>
            <div className={styles.friends}>{friendElements}</div>
        </div>
    )
}

export default FriendsOnline;