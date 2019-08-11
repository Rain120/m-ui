import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
import { IconSizeProps, CustomProps, CustomIconProps } from '../../_util/customProps';

interface MinusProps extends IconSizeProps, CustomProps, CustomIconProps {
  type: string;
}

export class Minus extends Component<MinusProps> {
  static defaultProps = {
    type: 'minus',
    viewBox: '0 0 30 2',
  };
  render() {
    return (
      <SvgWrapper {...this.props}>
        <path d="M0 0h30v2H0z" fillRule="evenodd"/>
      </SvgWrapper>
    );
  }
}
