import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../components/asyncComponent';
import { PrivateRoute } from './privateRoute';

const MainLayout = asyncComponent(() => import('../layouts/MainLayout'));
const Dashboard = asyncComponent(
  () => import('../components/Dashboard/Dashboard')
);
const PageNotFound = asyncComponent(
  () => import('../components/Error/PageNotFound')
);
const Login = asyncComponent(() => import('../components/Login/Login'));

export const Routes = (
  <MainLayout showLoadingHeader={true}>
    <div>dsdss</div>
    <Switch>
      <Route path='/login' component={Login} />
      {/* <Route exact path='/signin-callback' component={Dashboard} />
      <Route exact path='/signout-callback' component={SignoutCallback} />
      <Route exact path='/silent-renew' component={SilentRenew} />
      <Route path='/external-login' component={ExternalLogin} /> */}

      <Route exact path='/' component={Dashboard} />
      <PrivateRoute
        exact
        path='/'
        // rooms={['watchlist']}
        component={Dashboard}
        title='Dashboard'
      />
      <Route component={PageNotFound} />
    </Switch>
  </MainLayout>
);
