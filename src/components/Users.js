import React, {Component} from 'react';
import UserService from "../services/userService";
import User from "./User";

class Users extends Component {

    state = {users: []};

    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.getUsers();
        this.setState({users: users});
    }

    render() {

        let {users} = this.state;

        return (
            <div>
                <div>
                    {
                        users.map(value => {
                            return (
                                <User
                                    item={value}
                                    key={value.id}
                                />
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

export default Users;