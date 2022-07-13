import React, {Component} from 'react';
import PostService from "../services/postService";
import Post from "./Post";

class Posts extends Component {

    state = {postsUser: []};

    postService = new PostService();

    async componentDidMount() {
        let {idUser} = this.props;
        let postsUser = await this.postService.getPostOfUser(idUser);
        this.setState({
            postsUser: postsUser
        })
    }


    render() {

        let {postsUser} = this.state;

        return (
            <div>
                {
                    postsUser.map(value => {
                        return (
                            <Post
                                item={value}
                                key={value.id}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Posts;