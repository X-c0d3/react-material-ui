import React, { Component } from 'react';
import LoadingLayout from '../layouts/LoadingLayout';

type AsyncComponentProps = {
  showLoadingHeader?: boolean;
};

type AsyncComponentState = {
  component: any;
};

export default function asyncComponent(importComponent: any) {
  class AsyncComponent extends Component<
    AsyncComponentProps,
    AsyncComponentState
  > {
    constructor(props: any) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component,
      });
    }

    render() {
      const C = this.state.component;

      return C ? (
        <C {...this.props} />
      ) : (
        <LoadingLayout showHeader={this.props.showLoadingHeader} />
      );
    }
  }

  return AsyncComponent;
}
