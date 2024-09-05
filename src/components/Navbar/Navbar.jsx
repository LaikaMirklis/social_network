import styles from './Navbar.module.css';
import FriendsOnline from './FriendsOnline/FriendsOnline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import NavbarItem from './NavbarItems/NavbarItem';
import { useSelector } from 'react-redux';
import { pageList, loginPage } from './navbarPages';

const Navbar = () => {
    const [hideText, setHideText] = useState(false);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const sidebar = useSelector((state) => state.sidebar);

    let navbarElements = pageList.map(item => {
        if ((!isAuth && !item.authOnly) || isAuth)
            return <NavbarItem {...item} key={item.title} hideText={hideText} />
        return ''
    })

    return (
        <nav className={styles.nav}>
            <div className={styles.navList}>
                <div className={styles.hideIconWrapper}>
                    <FontAwesomeIcon icon={faBars} className={styles.hideIcon}
                        onClick={() => setHideText(!hideText)}
                    />
                </div>
                {!isAuth && <NavbarItem {...loginPage} key={loginPage.title} />}
                {navbarElements}
            </div>
            {isAuth && <div style={{ display: hideText ? 'none' : 'block' }}>
                <FriendsOnline friends={sidebar.friends} />
            </div>}
        </nav>
    )
}

export default Navbar;