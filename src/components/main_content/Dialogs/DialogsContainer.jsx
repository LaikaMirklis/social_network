import { sendMessage, updateNewMessageBody } from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const DialogsContainer = (props) => {
    document.title = "Dialogs"

    if (!props.isAuth) return <Navigate to="/login" />
    return <Dialogs {...props} />;
};

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { updateNewMessageBody, sendMessage })(DialogsContainer);