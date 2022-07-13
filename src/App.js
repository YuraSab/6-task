import React, {Component} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Users from "./components/Users";
import UserContainer from "./components/UserContainer";
import FullUser from "./components/FullUser";


class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to={'/users'}>Users</Link>
                </div>

                <div>
                    <Routes>
                        <Route path={'/users/'} element={<UserContainer/>}>
                            <Route index element={<Users/>}/>
                            <Route path={'*'} element={<Users/>}/>
                            <Route path={':id'} element={<FullUser/>}/>

                        </Route>
                    </Routes>
                </div>
            </div>

        );
    }
}

export default App;