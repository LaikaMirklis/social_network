import styles from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo {...props} />
        </div>
    )
}

export default Profile;