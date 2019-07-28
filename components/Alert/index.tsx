import React, { Component } from 'react';
import className from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import './style/index';

interface IAlertProps {
  type?: 'success' | 'error' | 'warn' | 'info'
  message: React.ReactNode
  className?: String
}

export default class Alert extends Component<IAlertProps> {

  render() {
    const { type = 'info', message } = this.props;
    const prefix = setPrefix('alert');

    return (
      <div
        className={className(prefix, `${prefix}-${type}`)}>
          {message}
      </div>
    )
  }
}
