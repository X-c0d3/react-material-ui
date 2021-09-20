import React, { useEffect } from 'react';
// import { inject } from 'mobx-react';
// import { observer } from 'mobx-react-lite';

const Dashboard = ({ store }: any) => {
  return <div>This is a dashboard</div>;
};

Dashboard.defaultProps = {
  accessKey: 'dashboard.home',
};

export default Dashboard;

// export default inject('store')(observer(Dashboard));
