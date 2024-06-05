import styles from './Navbar.module.css'
import FriendsOnline from './FriendsOnline/FriendsOnline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faGear, faHouse, faMagnifyingGlass, faMusic, faNewspaper, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import NavbarItem from './NavbarItems/NavbarItem';
import LogOutBtn from './NavbarItems/LogOutBtn';

const Navbar = (props) => {
    const { t } = useTranslation();

    const [hideText, setHideText] = useState(false);

    const toggleTextVisibility = () => {
        setHideText(!hideText);
    };

    const textStyle = { display: hideText ? 'none' : 'block' };
    const wrapperStyle = { width: hideText ? 'auto' : '11em' }

    const pageList = [
        {
            title: 'profile',
            icon: faHouse,
            isExist: true
        },
        {
            title: 'dialogs',
            icon: faEnvelope,
            isExist: true
        },
        {
            title: 'news',
            icon: faNewspaper,
            isExist: false
        },
        {
            title: 'music',
            icon: faMusic,
            isExist: false
        },
        {
            title: 'users',
            icon: faMagnifyingGlass,
            isExist: true
        },
        {
            title: 'settings',
            icon: faGear,
            isExist: false
        },
        {
            title: 'logOut',
            Component: LogOutBtn,
            icon: faRightFromBracket,
            isExist: true
        },
    ]

    let navbarElements = pageList.map(item => {
        return <NavbarItem
            {...item}
            textStyle={textStyle}
            wrapperStyle={wrapperStyle}
            t={t}
        />
    })

    return (
        <nav className={styles.nav}>
            <div className={styles.navList}>
                <div className={styles.hideIconWrapper}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={styles.hideIcon}
                        onClick={toggleTextVisibility}
                    />
                </div>
                {navbarElements}
            </div>
            <div style={textStyle}>
                <FriendsOnline
                    friends={props.sidebar.friends}
                    t={t}
                />
            </div>
        </nav>
    )
}

export default Navbar;