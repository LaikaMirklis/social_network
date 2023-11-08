import { useContext } from "react";
import StoreContext from "../../../../StoreContext";
import { addPostCreator, updateNewPostTextCreator } from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import LanguageContext from "../../../../i18n/LanguageContext";

const MyPostsContainer = (props) => {
    let t = useContext(LanguageContext);

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().profilePage;
                let onPostChange = (text) => {
                    let action = updateNewPostTextCreator(text);
                    store.dispatch(action);
                }

                let onAddPost = () => {
                    store.dispatch(addPostCreator());
                };
                return (<MyPosts
                    t={t}
                    profilePage={state}
                    updateNewPostText={onPostChange}
                    addPost={onAddPost}
                />)
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;