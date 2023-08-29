import styles from './Dialogs.module.css'
import Messages from './Messages/Messages';
import DialogItems from './DialogItems/DialogItems';

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <DialogItems />
            <Messages />
        </div>
    )
}

export default Dialogs;