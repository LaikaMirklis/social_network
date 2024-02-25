import styles from './Dialogs.module.css'
import Message from './Messages/Message';
import DialogItem from './DialogItem/DialogItem';
import { useTranslation } from 'react-i18next';

const Dialogs = (props) => {
    const { t } = useTranslation();

    let dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem
            key={d.id}
            name={d.name}
            id={d.id}
            avatar={d.ava}
            t={t}
        />)

    let messageElements = props.dialogsPage.messages.map(m => {
        return <Message
            key={m.id}
            message={m.message}
            userId={m.userId}
        />
    })

    let newMessageBody = props.dialogsPage.newMessageBody;

    let onNewMessageChange = (e) => { // e - event
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let sendIfKeyPress = (event) => {
        if (event.key === 'Enter' && event.ctrlKey) {  //Ctrl+Enter
            event.preventDefault();
            onSendMessageClick();
        }
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <div className={styles.sendArea}>
                    <textarea
                        placeholder={t('dialogsPage.textArea')}
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        onKeyDown={sendIfKeyPress}
                    />
                    <button onClick={onSendMessageClick}>{t('dialogsPage.sendButton')}</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;