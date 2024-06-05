import styles from './Friend.module.css'

const Friend = (props) => {
    const { photo, name } = props

    return (
        <div className={styles.friend}>
            <img src={photo} alt={name} className={styles.avatar} />
            {name}
        </div>
    )
}

export default Friend;