import styles from './Navbar.module.css'
import FriendsOnline from './FriendsOnline/FriendsOnline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import NavbarItem from './NavbarItems/NavbarItem';
import { connect } from 'react-redux';
import { pageList, loginPage } from './navbarPages';

const Navbar = ({ isAuth, sidebar }) => {
    const [hideText, setHideText] = useState(false);

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
                        onClick={() => { setHideText(!hideText) }}
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

let mapStateToProps = (state) => ({
    sidebar: state.sidebar,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(Navbar);