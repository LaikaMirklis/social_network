import { NavLink } from 'react-router-dom';
import styles from './DialogItems.module.css'

const DialogItems = (props) => {
    return (
        <div className={styles.dialogsItems}>
            <div className={styles.dialog}>
                <NavLink to='/dialogs/1'>Jane</NavLink>
            </div>
            <div className={styles.dialog}>
                <NavLink to='/dialogs/2'>David</NavLink>
            </div>
            <div className={styles.dialog}>
                <NavLink to='/dialogs/3'>Mark</NavLink>
            </div>
            <div className={styles.dialog}>
                <NavLink to='/dialogs/4'>Polly</NavLink>
            </div>
            <div className={styles.dialog}>
                <NavLink to='/dialogs/5'>Rea</NavLink>
            </div>
            <div className={styles.dialog}>
                <NavLink to='/dialogs/6'>Nate</NavLink>
            </div>
        </div>
    )
}

export default DialogItems;