import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/actions';

class UserPage extends React.Component {

    componentDidMount () {
        this.fetchUsers();
    }

    render () {
        return (
            <div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        users: state.users.users
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
