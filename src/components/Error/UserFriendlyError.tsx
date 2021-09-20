import React from 'react';
// import AppIcon from '../common/AppIcon';
// import { LockOutlined } from '@ant-design/icons';
// import { Button } from 'antd';
// import AuthService from '../../services/authService';
// import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

// import { GridContainer as Container } from '../common/Container';

type UserFriendlyErrorProp = {
  errorMessage?: string;
  errorHeader?: string;
};

const UserFriendlyError = (props: UserFriendlyErrorProp) => {
  return (
    <div>
      We apologize for the inconvenience. The error has been logged and internal
      quality control has been informed
    </div>
  );
};

export default UserFriendlyError;

// <div>
//   We apologize for the inconvenience. The error has been logged and internal
//   quality control has been informed
// </div>
//   <Container>
//     <h2>
//       <AppIcon icon={faExclamationCircle.iconName} />
//       {props.errorHeader ? props.errorHeader : 'Oops something went wrong'}
//     </h2>
//     <h3>
//       {props.errorMessage
//         ? props.errorMessage
//         : 'We apologize for the inconvenience. The error has been logged and internal quality control has been informed.'}
//     </h3>
//     {!props.errorMessage && (
//       <h3>
//         If you feel this function is critical, please contact our{' '}
//         <Button
//           id='jira-support-request'
//           type='link'
//           onClick={() => {
//             window.ATL_JQ_PAGE_PROPS.triggerFunction();
//           }}
//         >
//           support team
//         </Button>{' '}
//         <br />
//         Return to the{' '}
//         <Button type='link' onClick={() => window.location.replace('/')}>
//           Dashboard
//         </Button>
//       </h3>
//     )}
//     {props.showLogin && (
//       <Button
//         type='primary'
//         icon={<LockOutlined />}
//         onClick={() => {
//           new AuthService().login();
//         }}
//       >
//         Login
//       </Button>
//     )}
//   </Container>
// );
