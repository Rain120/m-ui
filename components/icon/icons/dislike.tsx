import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
import { IconSizeProps, CustomProps, SvgProps } from '../../_util/customProps';

interface DislikeProps extends IconSizeProps, CustomProps, SvgProps {
  type: string;
}

export class Dislike extends Component<DislikeProps> {
  static defaultProps = {
    type: 'dislike',
    viewBox: '0 0 72 72',
    fill: '#000'
  };
  render() {
    const { fill, ...resetProps } = this.props;
    return (
      <SvgWrapper {...resetProps}>
        <g fill="none" fillRule="evenodd">
          <path
            d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z"
            fill={fill}
          />
          <path fill={fill} d="M47 22h2v6h-2zm-24 0h2v6h-2z" />
          <path d="M21 51s4.6-7 15-7 15 7 15 7" stroke={fill} strokeWidth="2" />
        </g>
      </SvgWrapper>
    );
  }
}
