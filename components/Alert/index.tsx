import React, { Component } from 'react';
import className from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import './style';

interface IAlertProps {
  type?: 'success' | 'error' | 'warn' | 'info';
  message: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default class Alert extends Component<IAlertProps> {

  render() {
    const { type = 'info', message, style } = this.props;
    const prefix = setPrefix('alert');

    return (
      <div
        className={className(prefix, `${prefix}-${type}`)}
        style={style}
      >
          {message}
      </div>
    )
  }
}
