import { NavLink } from 'react-router-dom';
import styles from './NavbarItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const NavbarItem = ({ title, icon, isExist, Component, hideText }) => {
    const { t } = useTranslation();

    const textStyle = { display: hideText ? 'none' : 'block' };
    const wrapperStyle = { width: hideText ? 'auto' : '11em' };

    const content = (
        <span>
            <FontAwesomeIcon icon={icon} className={styles.icon} title={t(`navbar.${title}`)} />
            <p style={textStyle}>{t(`navbar.${title}`)}</p>
        </span>
    );

    return (
        <div className={`${styles.item} ${!isExist ? styles.doNotCross : ''}`}
            style={wrapperStyle}>
            {Component
                ? <Component>{content}</Component>
                : <NavLink to={`/${title}`}>{content}</NavLink>}
        </div>
    );
}

export default NavbarItem;