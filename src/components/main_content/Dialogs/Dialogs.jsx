import React from "react";
import styles from './Dialogs.module.css'
import Message from './Messages/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    let t = props.t;

    let dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem
            name={d.name}
            id={d.id}
            avatar={d.ava}
            t={t}
        />)

    let messageElements = props.dialogsPage.messages.map(m => {
        return <Message message={m.message} userId={m.userId} />
    })

    let newMessageBody = props.dialogsPage.newMessageBody;

    let onNewMessageChange = (e) => { // e - event
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
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
                    />
                    <button onClick={onSendMessageClick}>{t('dialogsPage.sendButton')}</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;