import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let t = props.t;
    return (
        <div>
            <ProfileInfo t={t} />
            <MyPostsContainer
                store={props.store}
                t={t}
            />
        </div>
    )
}

export default Profile;