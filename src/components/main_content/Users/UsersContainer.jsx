import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsers, unfollow } from '../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPageNumber)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber)
    }

    render() {
        const { getUsers, isFetching, ...usersProps } = this.props
        return <>
            {isFetching ? <Preloader /> : null}
            <Users {...usersProps} onPageChanged={this.onPageChanged} />
        </>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPageNumber: state.usersPage.currentPageNumber,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { follow, unfollow, getUsers })(UsersContainer);