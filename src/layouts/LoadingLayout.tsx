import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import SimpleHeader from '../components/Header/SimpleHeader';

export type LoadingLayoutProp = {
  showHeader?: boolean;
};
const LoadingLayout = (props: LoadingLayoutProp) => (
  <>
    {props.showHeader && <SimpleHeader />}
    <Skeleton animation='wave' />
  </>
);

export default LoadingLayout;
