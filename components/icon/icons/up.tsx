import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
import { IconSizeProps, CustomProps, SvgProps } from '../../_util/customProps';

interface UpProps extends IconSizeProps, CustomProps, SvgProps {
  type: string;
}

export class Up extends Component<UpProps> {
  static defaultProps = {
    type: 'up',
    viewBox: '0 0 44 44',
  };
  render() {
    return (
      <SvgWrapper {...this.props}>
        <path fill="none" d="M-1-1h46v46H-1z" />
        <defs>
          <path id="a" d="M-129-845h24v24h-24z" />
        </defs>
        <clipPath id="b">
          <use href="#a" />
        </clipPath>
        <g clipPath="url(#b)">
          <defs>
            <path id="c" d="M-903-949H947V996H-903z" />
          </defs>
        </g>
        <path d="M23.417 14.23L11.184 26.46l2.12 2.12 10.12-10.117 10.118 10.118 2.12-2.12L23.43 14.228l-.006.005z" />
      </SvgWrapper>
    );
  }
}
