import styles from './Users.module.css'
import User from './User/User';
import axios from 'axios';

const Users = (props) => {
    const t = props.t;

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    let usersElements = props.users.map(u =>
        <User
            key={u.id}
            id={u.id}
            photos={u.photos}
            followed={u.followed}
            name={u.name}
            status={u.status}
            follow={props.follow}
            unfollow={props.unfollow}
            t={t}
        />)

    return (
        <div className={styles.findUsers}>
            <button onClick={getUsers} className={styles.getUsersButton}>Get users</button>
            <h3>{t('usersPage.users')}</h3>
            <div className={styles.users}>
                {usersElements}
            </div>
            <div className={styles.showMoreButtonWrapper}>
                <button className={styles.showMoreButton}>{t('usersPage.showMoreButton')}</button>
            </div>
        </div>
    )
}

export default Users;