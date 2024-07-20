import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css'

const DialogItem = ({ t, photo, id, name }) => {
    let path = '/dialogs/' + id

    return (
        <NavLink to={path} className={styles.dialogLink}>
            <img src={photo} alt={name} className={styles.photo} />
            <div className={styles.info}>
                {name}
                <div className={styles.lastMessage}>{t('dialogsPage.lastMessage')}</div>
            </div>
        </NavLink>
    )
}

export default DialogItem;