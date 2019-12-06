import React, { Component, Fragment } from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(error) {
    // process the error
    // return new object of state
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/qIufhof.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default ErrorBoundary;
