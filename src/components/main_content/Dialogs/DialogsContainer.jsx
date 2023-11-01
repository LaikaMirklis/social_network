import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../../redux/dialogs-reducer";


const DialogsContainer = (props) => {
    let t = props.t;

    let state = props.store.getState().dialogsPage;

    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action)
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    return (
        <Dialogs
            t={t}
            dialogsPage={state}
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
        />
    )
}

export default DialogsContainer;