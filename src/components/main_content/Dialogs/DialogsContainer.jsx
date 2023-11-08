import { useContext } from "react";
import StoreContext from "../../../StoreContext";
import LanguageContext from "../../../i18n/LanguageContext";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let t = useContext(LanguageContext)

    const store = useContext(StoreContext);

    let state = store.getState().dialogsPage;

    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body);
        store.dispatch(action);
    }

    let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
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