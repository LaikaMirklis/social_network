import { sendMessageCreator, updateNewMessageBodyCreator } from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

const DialogsContainer = (props) => {
    const { t } = useTranslation();

    return <Dialogs {...props} t={t} />;
};

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);