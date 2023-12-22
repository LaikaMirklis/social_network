import { sendMessage, updateNewMessageBody } from "../../../redux/dialogs-reducer";
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

export default connect(mapStateToProps, { updateNewMessageBody, sendMessage })(DialogsContainer);