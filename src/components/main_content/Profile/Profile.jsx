import styles from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyProfileInfo from "./ProfileInfo/MyProfileInfo";

const Profile = (props) => {
    debugger
    if (Object.keys(props).length === 0) {
        return (
            <div className={styles.profileWrapper}>
                <MyProfileInfo />
                <MyPostsContainer />
            </div>
        )
    }
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo {...props} />
        </div>
    )
}

export default Profile;