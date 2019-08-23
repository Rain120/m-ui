import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
import { IconSizeProps, CustomProps, SvgProps } from '../../_util/customProps';

interface CheckProps extends IconSizeProps, CustomProps, SvgProps {
  type: string;
}

export class Check extends Component<CheckProps> {
  static defaultProps = {
    type: 'check',
    viewBox: '0 0 44 44',
  };
  render() {
    return (
      <SvgWrapper {...this.props}>
        <path fillRule="evenodd" d="M34.538 8L38 11.518 17.808 32 8 22.033l3.462-3.518 6.346 6.45z"/>
      </SvgWrapper>
    );
  }
}
