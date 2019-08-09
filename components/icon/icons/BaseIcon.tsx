import React, { Component } from 'react';
import classnames from 'classnames';
import loadSprite from './IconSvg';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface BaseIconProps extends IconSizeProps, CustomProps {
  type: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
  stroke?: string
}

export default class BaseIcon extends Component<BaseIconProps> {
  static defaultProps = {
    size: 'md',
  };
  componentDidMount() {
    loadSprite(this.props.type);
  }
  render() {
    const { size, type, className, ...resetProps } = this.props;
    const wrapCls = classnames(
      className,
      'rmc-ui-icon',
      `rmc-ui-icon-${type}`,
      `rmc-ui-icon-${size}`
    );
    return (
      <svg className={wrapCls} { ...resetProps } >
        <use xlinkHref={`#${type}`} />
      </svg>
    )
  }
}
