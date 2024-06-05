import styles from './Dialogs.module.css'
import Message from './Messages/Message';
import DialogItem from './DialogItem/DialogItem';
import AddMessageForm from './AddMessageForm';

const Dialogs = (props) => {
    const { t, dialogsPage, sendMessage } = props;

    let dialogsElements = dialogsPage.dialogs.map(dialog =>
        <DialogItem
            key={dialog.id}
            {...dialog}
            t={t}
        />)

    let messageElements = dialogsPage.messages.map(message => {
        let { id, ...rest } = message
        return <Message
            key={id}
            {...rest}
        />
    })

    let addNewMessage = (values) => {
        sendMessage(values.newMessageBody)
        values.newMessageBody = '' // хз чи так можна
    }

    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <AddMessageForm onSubmit={addNewMessage} t={t} />
            </div>
        </div>
    )
}

export default Dialogs;