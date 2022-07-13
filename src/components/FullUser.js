import React, {Component} from 'react';
import {useLocation, useParams} from "react-router-dom";
import UserService from "../services/userService";
import PostService from "../services/postService";

export function withRouter(Children){
    return(props) => {
        const match = {params: useParams()};
        const location = useLocation();
        return <Children {...props} match={match} location={location}/>
    }
}


class FullUser extends Component {

    state = {fullUser: null, postsUser: []};

    postService = new PostService();
    userService = new UserService();


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
                    fullUser &&
                    (
                        <div>
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
                                            <h3 key={value.id}>
                                                {value.body}
                                            </h3>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    )
                }
            </div>
        );
    }
}

export default withRouter(FullUser);