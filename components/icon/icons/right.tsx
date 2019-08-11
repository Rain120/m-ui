import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
import { IconSizeProps, CustomProps, CustomIconProps } from '../../_util/customProps';

interface RightProps extends IconSizeProps, CustomProps, CustomIconProps {
  type: string;
}

export class Right extends Component<RightProps> {
  static defaultProps = {
    type: 'right',
    viewBox: '0 0 44 44',
  };
  render() {
    return (
      <SvgWrapper {...this.props}>
        <defs>
          <path id="a" d="M-129-845h24v24h-24z" />
        </defs>
        <clipPath id="b">
          <use href="#a" overflow="visible" />
        </clipPath>
        <g clipPath="url(#b)">
          <defs>
            <path id="c" d="M-903-949H947V996H-903z" />
          </defs>
        </g>
        <path d="M30.6 21.4L18.37 9.165l-2.12 2.12 10.117 10.12-10.118 10.118 2.12 2.12 12.234-12.232-.005-.006z" />
      </SvgWrapper>
    );
  }
}
