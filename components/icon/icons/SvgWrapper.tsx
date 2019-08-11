import React, { Component } from 'react';
import classnames from 'classnames';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface SvgWrapperProps extends IconSizeProps, CustomProps {
  type: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
  stroke?: string;
  viewBox?: string;
}

export default class SvgWrapper extends Component<SvgWrapperProps> {
  static defaultProps = {
    size: 'md',
  };
  render() {
    const { size, type, className, children, ...resetProps } = this.props;
    const wrapCls = classnames(className, 'rmc-ui-icon', `rmc-ui-icon-${type}`, `rmc-ui-icon-${size}`);
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={wrapCls} {...resetProps}>
        {children}
      </svg>
    );
  }
}
