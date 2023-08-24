import ava from "./avatar.png";
import styles from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={styles.content}>
            <img
                src="https://cdnb.artstation.com/p/assets/images/images/046/499/745/large/l-y-hyun-fantasy-forest-secret-village.jpg?1645264603"
                className={styles.background}
                alt="background"
            />
            <div>
                <img src={ava} className={styles.avatar} alt="avatar" />
                ava + description
            </div>
            <div>
                my posts
                <div>new posts</div>
            </div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    )
}

export default Profile;