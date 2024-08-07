import styles from './User.module.css'
import defaultPhoto from '../../../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

const User = ({ t, user, followingInProgress, unfollow, follow, isAuth }) => {
    const { id, name, status, photos, followed } = user

    return (
        <div className={styles.user} >
            <div className={styles.leftBlock}>
                <NavLink to={'/profile/' + id} >
                    <img src={photos.small != null
                        ? photos.small
                        : defaultPhoto}
                        className={styles.userPhoto}
                        alt={name} />
                </NavLink>
                {isAuth && <>
                    {followed
                        ? <button disabled={followingInProgress.some(userId => userId === id)}
                            onClick={() => unfollow(id)}
                            className={styles.followedBtn}> {t('usersPage.unfollow')}</button>
                        : <button disabled={followingInProgress.some(userId => userId === id)}
                            onClick={() => follow(id)}
                            className={styles.followedBtn}> {t('usersPage.follow')}</button>
                    }
                </>}
            </div>

            <div className={styles.rightBlock}>
                <div className={styles.name}> {name} </div>
                <div className={styles.status}>{status}</div>
            </div>
        </div>
    )
}

export default User;