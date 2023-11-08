import styles from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={styles.friend}>
            <img src={props.photo} alt="avatar" className={styles.avatar} />
            {props.name}</div>
    )
}

export default Friend;