import Friend from './Friend/Friend';
import styles from './FriendsOnline.module.css'

const FriendsOnline = (props) => {
    const { t, friends } = props;
    let friendElements = friends.map(f => {
        const { id, ...rest } = f
        return <Friend
            key={id}
            {...rest}
        />
    })

    return (
        <div className={styles.friendsBlock}>
            <h3>{t('navbar.friends')}</h3>
            <div className={styles.friends}>{friendElements}</div>
        </div>
    )
}

export default FriendsOnline;