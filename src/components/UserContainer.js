import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../redux';

function UserContainer({userData, fetchUsers}) {
    useEffect( () => {
        fetchUsers()
    }, [] )
    return userData.loading? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>User List</h2>
            <div>{userData && userData.users && userData.users.map(user => <p>{user.name}</p> ) } </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user  //Here, to access the "user", we need to access state. 
        //Then we need to access the initial state or the latest changed state through root reducer.
        // In the root reducer, the userReducer has been referred as "user". Hence, to access the "users" in the state,
        // the term "state.user" has to be used.
    }
};



const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }

};


export default connect(mapStateToProps, mapDispatchToProps) (UserContainer);
