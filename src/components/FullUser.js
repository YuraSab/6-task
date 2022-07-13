import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import UserService from "../services/userService";
import PostService from "../services/postService";
import Posts from "./Posts";

class FullUser extends Component {

    state = {fullUser: null, postsUser: []};

    userService = new UserService();
    postService = new PostService();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        let fullUser = await this.userService.getUserById(id);
        let postsUser = await this.postService.getPostOfUser(id);
        this.setState({
            fullUser: fullUser,
            postsUser: postsUser
        })
    }


    render() {

        let {fullUser, postsUser} = this.state;

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
                            {
                                postsUser.map(value => {
                                    return (
                                        <Posts
                                            item={value}
                                            key={value.id}
                                        />
                                    )
                                })
                            }
                        </div>
                    </h3>
                }
            </div>
        );
    }
}

export default withRouter(FullUser);