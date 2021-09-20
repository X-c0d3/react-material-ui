import { Route } from 'react-router-dom';

export const PrivateRoute = ({ component, accessResource, ...rest }: any) => {
  const renderFn = (Component: any) => (props: any) => <></>;
  return <Route {...rest} render={renderFn(component)} />;
};
