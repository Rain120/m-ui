import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
import { IconSizeProps, CustomProps, SvgProps } from '../../_util/customProps';

interface CrossCircleProps extends IconSizeProps, CustomProps, SvgProps {
  type: string;
}

export class CrossCircle extends Component<CrossCircleProps> {
  static defaultProps = {
    type: 'cross-circle',
    viewBox: '0 0 48 48',
    theme: 'outlined',
  };
  render() {
    const { theme, ...resetProps } = this.props;
    return (
      <SvgWrapper {...resetProps}>
        {theme === 'outlined' && (
          <g fillRule="evenodd">
            <path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z" />
            <path d="M24.34 22.22l-7.775-7.775a1.5 1.5 0 1 0-2.12 2.12l7.773 7.775-7.774 7.775a1.5 1.5 0 1 0 2.12 2.12l7.775-7.773 7.774 7.774a1.5 1.5 0 1 0 2.12-2.12L26.46 24.34l7.774-7.774a1.5 1.5 0 1 0-2.12-2.12l-7.776 7.773z" />
          </g>
        )}
        {theme === 'filled' && (
          <path
            d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm.353-25.77l-7.593-7.593c-.797-.8-1.538-.822-2.263-.207-.724.614-.56 1.617-.124 2.067l7.852 7.847-7.72 7.723c-.727.728-.56 1.646-.066 2.177.493.532 1.553.683 2.31-.174l7.588-7.584 7.644 7.623c.796.798 1.608.724 2.21.145.605-.58.72-1.442-.074-2.24l-7.657-7.67 7.545-7.52c.81-.697.9-1.76.297-2.34-.92-.885-1.85-.338-2.264.078l-7.685 7.667z"
            fillRule="evenodd"
          />
        )}
      </SvgWrapper>
    );
  }
}
