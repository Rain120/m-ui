import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
import { IconSizeProps, CustomProps, SvgProps } from '../../_util/customProps';

interface DownProps extends IconSizeProps, CustomProps, SvgProps {
  type: string;
}

export class Down extends Component<DownProps> {
  static defaultProps = {
    type: 'down',
    viewBox: '0 0 44 44',
  };
  render() {
    return (
      <SvgWrapper {...this.props}>
        <path
          d="M22.355 28.237l-11.483-10.9c-.607-.576-1.714-.396-2.48.41l.674-.71c-.763.802-.73 2.07-.282 2.496l11.37 10.793-.04.04 2.088 2.195L23.3 31.52l12.308-11.682c.447-.425.48-1.694-.282-2.496l.674.71c-.766-.806-1.873-.986-2.48-.41L22.355 28.237z"
          fillRule="evenodd"
        />
      </SvgWrapper>
    );
  }
}
