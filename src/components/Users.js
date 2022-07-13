import React, {Component} from 'react';
import UserService from "../services/userService";
import User from "./User";
import {Route, Switch, withRouter} from "react-router-dom";
import FullUser from "./FullUser";

class Users extends Component {

    state = {users: []};

    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.getUsers();
        this.setState({users: users});
    }

    render() {

        let {users} = this.state;
        let {match: {url}} = this.props;

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
                <div>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match: {params: {id}}} = props;

                            return(
                                <FullUser
                                    key = {id}
                                />
                            )
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Users);