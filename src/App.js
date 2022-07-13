import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Users from "./components/Users";


class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to={'/users'}>Users</Link>
                </div>

                <div>
                    <Switch>
                        <Route path={'/users'} render={() => {
                            return(
                                <Users/>
                            )
                        }}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

export default App;