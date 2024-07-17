import Friend from './Friend/Friend';
import styles from './FriendsOnline.module.css'
import { useTranslation } from 'react-i18next';

const FriendsOnline = ({ friends }) => {
    const { t } = useTranslation();

    let friendElements = friends.map(f => {
        const { id, ...rest } = f
        return <Friend
            key={id}
            {...rest}
        />
    })

    return (
        <div className={styles.friendsBlock}>
            <h3>{t('navbar.friends')}</h3>
            <div className={styles.friends}>{friendElements}</div>
        </div>
    )
}

export default FriendsOnline;