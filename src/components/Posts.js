import React, {Component} from 'react';

class Posts extends Component {
    render() {

        let {item} = this.props;

        return (
            <div>
                {item.body}
                <hr/>
            </div>
        );
    }
}

export default Posts;