import React, { Component } from 'react';
import classnames from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import './style/index';

interface IAlertProps {
  type?: 'success' | 'error' | 'warn' | 'info'
  message: React.ReactNode
  className?: string
}

export default class Alert extends Component<IAlertProps> {

  render() {
    const { type = 'info' } = this.props;
    const prefix = setPrefix('alert');

    return (
      <div
        className={classnames(prefix, `${prefix}-${type}`)}>
          {this.props.message}
      </div>
    )
  }
}
