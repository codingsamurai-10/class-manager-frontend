import { Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Notifications from './containers/Notifications';
import Profile from './containers/Profile';

const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/Notifications' component={Notifications} />
                <Route exact path='/Profile' component={Profile} />
            </Switch>
        </div>
    );
}

export default Routing;
