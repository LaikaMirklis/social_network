import ava from "./avatar.png";
import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"

const Profile = () => {
    return (
        <div>
            <img
                src="https://cdnb.artstation.com/p/assets/images/images/046/499/745/large/l-y-hyun-fantasy-forest-secret-village.jpg?1645264603"
                className={styles.background}
                alt="background"
            />
            <div>
                <img src={ava} className={styles.avatar} alt="avatar" />
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;