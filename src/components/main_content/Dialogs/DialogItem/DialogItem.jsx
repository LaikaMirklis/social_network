import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css'

const DialogItem = (props) => {
    let t = props.t;

    let path = "/dialogs/" + props.id
    return (
        <NavLink to={path} className={styles.dialogLink}>
            <img src={props.avatar} alt='avatar' className={styles.avatar} />
            <div className={styles.info}> {props.name}
                <div className={styles.lastMessage}>{t('dialogsPage.lastMessage')}</div>
            </div></NavLink>
    )
}

export default DialogItem;