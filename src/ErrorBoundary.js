/*eslint-disable no-console */
import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log('Error:Info', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1 > Something Went Wrong. </h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
