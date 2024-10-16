import React from 'react';
import { connect } from 'react-redux';
import { follow, requestUsers, unfollow } from '../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { getCurrentPageNumber, getFollowingInProgress, getIsAuth, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPageNumber)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber)
    }

    render() {
        console.log("RENDER USERS");
        const { getUsers, isFetching, ...usersProps } = this.props
        return <>
            {isFetching ? <Preloader /> : null}
            <Users {...usersProps} onPageChanged={this.onPageChanged} />
        </>
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps USERS')
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPageNumber: getCurrentPageNumber(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
};

export default connect(mapStateToProps, { follow, unfollow, getUsers: requestUsers })(UsersContainer);