import React from "react";
import styles from './Dialogs.module.css'
import Message from './Messages/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d =>
        <DialogItem
            name={d.name}
            id={d.id}
            avatar={d.ava}
        />)

    let messageElements = state.messages.map(m => {
        return <Message message={m.message} userId={m.userId} />
    })
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => { // e - event
        let body = e.target.value;
        debugger;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
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
                        placeholder="Write a message..."
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                    />
                    <button onClick={onSendMessageClick}>Send</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;