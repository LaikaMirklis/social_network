import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let t = props.t;
    return (
        <div>
            <ProfileInfo t={t} />
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                t={t}
            />
        </div>
    )
}

export default Profile;