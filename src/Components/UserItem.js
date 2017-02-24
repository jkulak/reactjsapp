import React from 'react';

class UserItem extends React.Component {

    render() {
        return (
            <li className="User">
                <strong>{this.props.user.name}</strong>: {this.props.user.website} ({this.props.user.username}) 
            </li>
        );
    };
}

UserItem.propTypes = {
    // user: React.PropTypes.object,
    // onDelete: React.PropTypes.func
}

export default UserItem;
