import styles from './Dialogs.module.css'
import Message from './Messages/Message';
import DialogItem from './DialogItem/DialogItem';
import AddMessageForm from './AddMessageForm';

const Dialogs = (props) => {
    const { dialogsPage, ...formProps } = props;

    let dialogsElements = dialogsPage.dialogs.map(dialog =>
        <DialogItem
            key={dialog.id}
            {...dialog}
            t={props.t}
        />)

    let messageElements = dialogsPage.messages.map(message => {
        let { id, ...rest } = message
        return <Message
            key={id}
            {...rest}
        />
    })

    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <AddMessageForm {...formProps} />
            </div>
        </div>
    )
}

export default Dialogs;