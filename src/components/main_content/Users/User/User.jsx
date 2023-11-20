import styles from './User.module.css'

const User = (props) => {
    const t = props.t;

    let follow = () => {
        props.follow(props.id)
    }

    let unfollow = () => {
        props.unfollow(props.id)
    }

    return (
        <div className={styles.user} >
            <div className={styles.userImg} >
                <img src={props.photoUrl} alt="user_image" />
                {props.followed
                    ? <button onClick={unfollow} className={styles.followedButton}> {t('usersPage.unfollow')}</button>
                    : <button onClick={follow} className={styles.followedButton}> {t('usersPage.follow')}</button>}
            </div>

            <div className={styles.userInfo}>
                <div className={styles.baseInfo}>
                    <div>{props.fullName}</div>
                    <div className={styles.location} >
                        <div>{props.location.country},</div>
                        <div>{props.location.city}</div>
                    </div>
                </div>
                <div className={styles.status}>{props.status}</div>

            </div>

        </div>
    )
}

export default User;