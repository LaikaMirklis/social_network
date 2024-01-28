import styles from './User.module.css'
import defaultPhoto from '../../../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

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
            <div className={styles.leftBlock}>
                <NavLink to={'/profile/' + props.id} >
                    <img src={props.photos.small != null
                        ? props.photos.small
                        : defaultPhoto}
                        className={styles.userPhoto}
                        alt="user_image" />
                </NavLink>
                {props.followed
                    ? <button onClick={unfollow} className={styles.followedButton}> {t('usersPage.unfollow')}</button>
                    : <button onClick={follow} className={styles.followedButton}> {t('usersPage.follow')}</button>}
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