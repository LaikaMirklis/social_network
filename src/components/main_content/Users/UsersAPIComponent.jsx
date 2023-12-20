import React from 'react';
import axios from 'axios';
import Users from './Users';

class UsersAPIComponent extends React.Component {

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

    render() {
        return <Users
            t={this.props.t}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPageNumber={this.props.currentPageNumber}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}
export default UsersAPIComponent;