import React from 'react';
import styles from './Users.module.css'
import User from './User/User';
import axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPageNumber}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount)
        })
    }


    renderPageNumber = (pageNumber) => {
        switch (pageNumber) {
            case 0: //pages that hide in "..."
                return <span className={styles.ellipsis}>...</span>
            case this.props.currentPageNumber:
                return <span className={styles.selectedPage}>{pageNumber}</span>
            default:
                return <span className={styles.pages} onClick={(e) => this.onPageChanged(pageNumber)}>{pageNumber}</span>
        }
    }

    renderPagesControl = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let currentPageNumber = this.props.currentPageNumber
        let pages = [];
        if (currentPageNumber < 5) {
            for (let i = 1; i <= 5; i++) {
                pages.push({
                    number: i,
                })
            }
            pages.push(
                { number: 0, },
                { number: pagesCount, }
            )
        }
        else if (currentPageNumber > pagesCount - 3) {
            pages.push(
                { number: 1, },
                { number: 0, }
            )
            for (let i = pagesCount - 4; i <= pagesCount; i++) {
                pages.push({
                    number: i,
                })
            }
        }
        else {
            pages.push(
                { number: 1, },
                { number: 0, }
            )
            for (let i = currentPageNumber - 1; i <= currentPageNumber + 1; i++) {
                pages.push({
                    number: i,
                })
            }
            pages.push(
                { number: 0, },
                { number: pagesCount, }
            )
        }
        return pages.map(p => this.renderPageNumber(p.number))

    }

    render() {
        const t = this.props.t;

        let renderedPageControl = this.renderPagesControl();

        let usersElements = this.props.users.map(u =>
            <User
                key={u.id}
                id={u.id}
                photos={u.photos}
                followed={u.followed}
                name={u.name}
                status={u.status}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                t={t}
            />)

        return (
            <div className={styles.findUsers}>
                <h3>{t('usersPage.users')}</h3>
                <div>
                    {renderedPageControl}
                </div>
                <div className={styles.users}>
                    {usersElements}
                </div>
                <div>
                    {renderedPageControl}
                </div>
            </div>
        )
    }
}

export default Users;