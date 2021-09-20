/* /src/oidc/callback.jsx */
import React from 'react';

import { AuthConsumer } from '../../providers/authProvider';
// import { Spinner } from '../common/Spinner';
// import { GridContainer } from '../common/Container';

const SigninCallback = () => (
  <AuthConsumer>
    {({ signinRedirectCallback }) => {
      signinRedirectCallback();
      return (
        <div>
          <br />
          <p style={{ fontSize: '150%' }}>
            You're being redirected to the last visited page
          </p>
        </div>
        // <GridContainer
        //   bodyStyle={{
        //     display: 'flex',
        //     flexDirection: 'column',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     height: 200,
        //   }}
        // >
        //   <Spinner size='large' />
        //   <br />
        //   <p style={{ fontSize: '150%' }}>
        //     You're being redirected to the last visited page
        //   </p>
        // </GridContainer>
      );
    }}
  </AuthConsumer>
);

export default SigninCallback;
