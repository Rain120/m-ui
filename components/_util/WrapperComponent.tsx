import React, { Component } from 'react';

export const WrapperComponent = (Components, props = {}) => {
  return class WrapperComponent extends Component {
    render() {
      return <Components {...props} />;
    }
  }
};
