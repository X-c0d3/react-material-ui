import ErrorBoundary from '../components/Error/ErrorBoundary';
import { AuthConsumer } from '../providers/authProvider';
import asyncComponent from '../components/asyncComponent';
const SigninCallback = asyncComponent(
  () => import('../components/Auth/SigninCallback')
);

export type MainLayoutProp = {
  showLoadingHeader: boolean;
};
const MainLayout = (props: MainLayoutProp) => {
  return (
    <ErrorBoundary>
      <AuthConsumer>
        {({ logout, isAuthenticated, getUser }) => (
          <div>
            Main Layout
            {/* Only show main layout when user already logged in otherwise perform authenticate */}
            {isAuthenticated() ? <>Logined</> : <SigninCallback />}
          </div>
        )}
      </AuthConsumer>
    </ErrorBoundary>
  );
};

export default MainLayout;
