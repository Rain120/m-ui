import React, { Component } from 'react';
import classname from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import './style';

interface AlertProps {
  type?: 'success' | 'error' | 'warn' | 'info';
  message: React.ReactNode;
  className?: string;
  style?: React.CSSProperties
  banner?: boolean;
}

export default class Alert extends Component<AlertProps> {

  render() {
    const {
      message,
      style,
      className,
      banner,
    } = this.props;
    let { type = 'info' } = this.props;
    const prefixCls = setPrefix('alert');
    type = banner && type === undefined ? 'warning' : type || 'info';
    const wrapCls = classname(
      prefixCls,
      `${prefixCls}-${type}`,
      {
        [`${prefixCls}-banner`]: !!banner,
      },
      className
    );

    return (
      <div className={wrapCls} style={style}>
        {message}
      </div>
    )
  }
}
