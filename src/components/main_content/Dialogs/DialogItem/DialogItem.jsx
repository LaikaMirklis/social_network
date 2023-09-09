import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <NavLink to={path} className={styles.dialogLink}>
            <img src={props.avatar} alt='avatar' className={styles.avatar} />
            <div className={styles.info}> {props.name}
                <div className={styles.lastMessage}>last message</div>
            </div></NavLink>
    )
}

export default DialogItem;