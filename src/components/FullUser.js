import React, {Component} from 'react';
import {Link, Route, Switch, withRouter} from "react-router-dom";
import UserService from "../services/userService";
import Posts from "./Posts";

class FullUser extends Component {

    state = {fullUser: null};

    userService = new UserService();



    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        let fullUser = await this.userService.getUserById(id);
        this.setState({
            fullUser: fullUser,
        })
    }


    render() {

        let {fullUser} = this.state;
        let {match: {url}} = this.props;
        let {match: {params: {id}}} = this.props;


        return (
            <div>
                {
                    fullUser && <h3>
                        <div>
                            Name: {fullUser.name}
                        </div>
                        <div>
                            Email: {fullUser.email}
                        </div>
                        <div>
                            Posts:
                        </div>

                        <div>
                            <Link to={`${url}/comments`}>Posts of user</Link>
                        </div>

                    <div>
                        <Switch>
                            <Route path={`${url}/comments`} render={(index) => {
                                return(
                                    <Posts
                                        idUser = {id}
                                        key = {index}
                                    />
                                )
                            }
                            }/>
                        </Switch>
                    </div>

                        {/*<div>*/}
                        {/*    {*/}
                        {/*        postsUser.map(value => {*/}
                        {/*            return (*/}
                        {/*                <Posts*/}
                        {/*                    item={value}*/}
                        {/*                    key={value.id}*/}
                        {/*                />*/}
                        {/*            )*/}
                        {/*        })*/}
                        {/*    }*/}
                        {/*</div>*/}
                    </h3>
                }
            </div>
        );
    }
}

export default withRouter(FullUser);