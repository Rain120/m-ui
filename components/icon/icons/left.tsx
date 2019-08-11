import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
import { IconSizeProps, CustomProps, CustomIconProps } from '../../_util/customProps';

interface LeftProps extends IconSizeProps, CustomProps, CustomIconProps {
  type: string;
}

export class Left extends Component<LeftProps> {
  static defaultProps = {
    type: 'left',
    viewBox: '0 0 44 44',
  };
  render() {
    return (
      <SvgWrapper {...this.props}>
        <>
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
          <path d="M16.247 21.4L28.48 9.165l2.12 2.12-10.117 10.12L30.6 31.524l-2.12 2.12-12.233-12.232.007-.006z" />
        </>
      </SvgWrapper>
    );
  }
}
