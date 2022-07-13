import React, {Component} from 'react';
import {Outlet} from "react-router-dom";

class UserContainer extends Component {
    render() {
        return (
            <div>
                <Outlet></Outlet>
            </div>
        );
    }
}

export default UserContainer;