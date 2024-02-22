import styles from './User.module.css'
import defaultPhoto from '../../../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

const User = (props) => {
    const t = props.t;

    return (
        <div className={styles.user} >
            <div className={styles.leftBlock}>
                <NavLink to={'/profile/' + props.id} >
                    <img src={props.photos.small != null
                        ? props.photos.small
                        : defaultPhoto}
                        className={styles.userPhoto}
                        alt="user_image" />
                </NavLink>
                {props.followed
                    ? <button disabled={props.followingInProgress.some(id => id === props.id)}
                        onClick={() => props.unfollow(props.id)}
                        className={styles.followedButton}> {t('usersPage.unfollow')}</button>
                    : <button disabled={props.followingInProgress.some(id => id === props.id)}
                        onClick={() => props.follow(props.id)}
                        className={styles.followedButton}> {t('usersPage.follow')}</button>
                }
            </div>

            <div className={styles.userInfo}>
                <div className={styles.baseInfo}>
                    <div>{props.name}</div>
                    <div className={styles.location} >
                        <div>Country,</div>
                        <div>city</div>
                        {/* <div>{props.location.country},</div>
                        <div>{props.location.city}</div> */}
                    </div>
                </div>
                <div className={styles.status}>{props.status}</div>

            </div>

        </div>
    )
}

export default User;