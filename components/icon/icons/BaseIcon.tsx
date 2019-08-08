import React, { Component } from 'react';
import loadSprite from './IconSvg';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface BaseIconProps extends IconSizeProps, CustomProps {
  type: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export default class BaseIcon extends Component<BaseIconProps> {
  componentDidMount() {
    loadSprite(this.props.type);
  }
  render() {
    const { type, width, height, style, className, fill } = this.props;
    return (
      <svg
        width={width}
        height={height}
        style={style}
        fill={fill}
        className={className}
      >
        <use xlinkHref={`#${type}`} />
      </svg>
    )
  }
}
