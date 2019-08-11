import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
import { IconSizeProps, CustomProps, CustomIconProps } from '../../_util/customProps';

interface CheckCircleProps extends IconSizeProps, CustomProps, CustomIconProps {
  type: string;
}

export class CheckCircle extends Component<CheckCircleProps> {
  static defaultProps = {
    type: 'check-circle',
    viewBox: '0 0 48 48',
    theme: 'outlined',
  };
  render() {
    const { theme, component, ...resetProps } = this.props;
    return (
      <SvgWrapper {...resetProps}>
        {component ? null : theme === 'outlined' ? (
          <>
            <g fillRule="evenodd">
              <path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z" />
              <path d="M12.2 23.2L10 25.3l10 9.9L37.2 15 35 13 19.8 30.8z" />
            </g>
          </>
        ) : (
          theme === 'filled' && (
            <path
              d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zM13.1 23.2l-2.2 2.1 10 9.9L38.1 15l-2.2-2-15.2 17.8-7.6-7.6z"
              fillRule="evenodd"
            />
          )
        )}
      </SvgWrapper>
    );
  }
}
