import { addPostCreator, updateNewPostTextCreator } from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

const MyPostsContainer = (props) => {
    const { t } = useTranslation();

    return <MyPosts {...props} t={t} />;
};

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);