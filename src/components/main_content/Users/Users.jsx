import React from 'react';
import styles from './Users.module.css'
import User from './User/User';
import axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        const t = this.props.t;

        let usersElements = this.props.users.map(u =>
            <User
                key={u.id}
                id={u.id}
                photos={u.photos}
                followed={u.followed}
                name={u.name}
                status={u.status}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                t={t}
            />)

        return (
            <div className={styles.findUsers}>
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
}

export default Users;