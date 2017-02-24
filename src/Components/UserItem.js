import React from 'react';

class UserItem extends React.Component {

    render() {
        return (
            <li className="User">
                <strong>{this.props.user.title}</strong>: {this.props.user.category} ({this.props.user.id}) 
            </li>
        );
    };
}

UserItem.propTypes = {
    // user: React.PropTypes.object,
    // onDelete: React.PropTypes.func
}

export default UserItem;
