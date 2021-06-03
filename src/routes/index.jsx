import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import TopPage from '../pages/TopPage'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Profile from '../pages/Profile'
import Setting from '../pages/Setting'

const MainRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <TopPage />
                </Route>
                <Route exact path='/home'>
                    <Home />
                </Route>
                <Route exact path='/sign-in'>
                    <SignIn />
                </Route>
                <Route exact path='/sign-up'>
                    <SignUp />
                </Route>
                <Route exact path='/profile'>
                    <Profile />
                </Route>
                <Route exact path='/setting'>
                    <Setting />
                </Route>
                <Route  path='*'>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </Router>
    )
}

export default MainRoute;
