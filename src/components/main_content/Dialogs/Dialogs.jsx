import React from "react";
import styles from './Dialogs.module.css'
import Message from './Messages/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem
            name={d.name}
            id={d.id}
            avatar={d.ava}
        />)

    let newMessageElement = React.createRef();

    let messageElements = props.dialogsPage.messages.map(m => {

        return <Message message={m.message} userId={m.userId} />
    }
    )

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newText: text });
    }

    let addMessage = () => {
        props.dispatch({ type: "ADD-MESSAGE" });
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
                        value={props.dialogsPage.newMessageText}
                        ref={newMessageElement}
                        onChange={onMessageChange}
                    />
                    <button onClick={addMessage}>Send</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;