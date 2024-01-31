import styles from './User.module.css'
import defaultPhoto from '../../../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';


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
                    ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${props.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "258d2f5d-d2e7-4d71-a4ad-dab9afab74fc"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) { props.unfollow(props.id) }
                            })
                    }} className={styles.followedButton}> {t('usersPage.unfollow')}</button>
                    : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${props.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "258d2f5d-d2e7-4d71-a4ad-dab9afab74fc"
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) { props.follow(props.id) }
                        })
                    }} className={styles.followedButton}> {t('usersPage.follow')}</button>}
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