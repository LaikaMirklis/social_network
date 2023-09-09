import React from "react";
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Message from './Messages/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.ava} />)

    let newMessageElement = React.createRef();

    let messageElements = props.state.messages.map(m => {

        return <Message message={m.message} userId={m.userId} />
    }
    )

    let addMessage = () => {
        debugger
        let text = newMessageElement.current.value;
        alert(text)
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <div className={styles.sendArea}>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>Send</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;