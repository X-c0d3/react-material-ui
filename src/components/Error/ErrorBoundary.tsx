import React from 'react';
// import * as Sentry from '@sentry/browser';
import UserFriendlyError from './UserFriendlyError';
import SimpleHeader from '../Header/SimpleHeader';

type ErrorBoundaryState = {
  hasError: boolean;
};
type ErrorBoundaryProp = {};
class ErrorBoundary extends React.Component<
  ErrorBoundaryProp,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // You can also log the error to an error reporting service
    console.log(error, info);
    // send error to Sentry
    // Sentry.captureException(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <SimpleHeader />
          <UserFriendlyError />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
