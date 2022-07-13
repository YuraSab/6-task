import React, {Component} from 'react';
import {Link} from "react-router-dom";

class User extends Component {
    render() {

        let {item} = this.props;

        return (
            <div>
                <Link to={`${item.id}`}>
                    {item.name}
                </Link>
            </div>
        );
    }
}

export default User;