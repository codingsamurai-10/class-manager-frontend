import { Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Notifications from './containers/Notifications';


const Routing = () => {
    return (
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/Notifications' component={Notifications} />
            </Switch>
    );
}

export default Routing;
