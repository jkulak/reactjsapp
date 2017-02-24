import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component{

    render(){

        let userItems;
        if (this.props.users) {
            userItems = this.props.users.map(user => {
                return (
                    <UserItem key={user.id} user={user} />
                )
            });
        }

        return (
            <div className="users">
                <h3>User list</h3>
                {userItems}
            </div>
        );
    }
}

UserList.propTypes = {
    // users: React.PropTypes.array,
    // onDelete: React.PropTypes.func
}

export default UserList;
