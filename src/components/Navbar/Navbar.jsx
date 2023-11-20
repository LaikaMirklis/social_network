import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import FriendsOnline from './FriendsOnline/FriendsOnline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faGear, faHouse, faMagnifyingGlass, faMusic, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = (props) => {
    const [hideText, setHideText] = useState(false);

    const toggleTextVisibility = () => {
        setHideText(!hideText);
    };

    const t = props.t;
    const stateStyle = { display: hideText ? 'none' : 'block' };

    return (
        <nav className={styles.nav}>
            <div>
                <div className={styles.hideIconWrapper}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={styles.hideIcon}
                        onClick={toggleTextVisibility}
                    />
                </div>
                <div className={styles.item}>
                    <NavLink to='/profile'>
                        <FontAwesomeIcon icon={faHouse} className={styles.icon} />
                        <p style={stateStyle}>{t('navbar.profile')}</p>
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/dialogs'>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                        <p style={stateStyle}>{t('navbar.messages')}</p>
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/news'>
                        <FontAwesomeIcon icon={faNewspaper} className={styles.icon} />
                        <p style={stateStyle}>{t('navbar.news')}</p>
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/music'>
                        <FontAwesomeIcon icon={faMusic} className={styles.icon} />
                        <p style={stateStyle}>{t('navbar.music')}</p>
                    </NavLink>
                </div>
                <div className={styles.item} id={styles.users}>
                    <NavLink to='/users'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
                        <p style={stateStyle}>{t('navbar.users')}</p>
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/settings'>
                        <FontAwesomeIcon icon={faGear} className={styles.icon} />
                        <p style={stateStyle}>{t('navbar.settings')}</p>
                    </NavLink>
                </div>
            </div>
            <div style={stateStyle} >
                <FriendsOnline
                    friends={props.sidebar.friends}
                    t={t}
                />
            </div>
        </nav>
    )
}

export default Navbar;