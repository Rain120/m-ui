import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
import { IconSizeProps, CustomProps, SvgProps } from '../../_util/customProps';

interface PlusProps extends IconSizeProps, CustomProps, SvgProps {
  type: string;
}

export class Plus extends Component<PlusProps> {
  static defaultProps = {
    type: 'plus',
    viewBox: '0 0 30 30',
  };
  render() {
    return (
      <SvgWrapper {...this.props}>
        <path d="M14 14H0v2h14v14h2V16h14v-2H16V0h-2v14z" fillRule="evenodd"/>
      </SvgWrapper>
    );
  }
}
