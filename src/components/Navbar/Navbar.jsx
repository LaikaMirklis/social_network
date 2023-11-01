import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import FriendsOnline from './FriendsOnline/FriendsOnline';

const Navbar = (props) => {
    let t = props.t; //translation
    return (
        <nav className={styles.nav}>
            <div>
                <div className={styles.item}>
                    <NavLink to='/profile'> {t('navbar.profile')}</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/dialogs'>{t('navbar.messages')}</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/news'>{t('navbar.news')}</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/music'>{t('navbar.music')}</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/settings'>{t('navbar.settings')}</NavLink>
                </div>
            </div>
            <FriendsOnline
                friends={props.friends}
                t={t}
            />
        </nav>
    )
}

export default Navbar;