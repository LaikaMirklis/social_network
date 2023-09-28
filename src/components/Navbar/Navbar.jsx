import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import FriendsOnline from './FriendsOnline/FriendsOnline';



const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <div>
                <div className={styles.item}>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/dialogs'>Messages</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/news'>News</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/music'>Music</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/settings'>Settings</NavLink>
                </div>
            </div>
            <FriendsOnline friends={props.sidebar.friends} />
        </nav>
    )
}

export default Navbar;