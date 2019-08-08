import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface SuccessProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Success extends React.Component<SuccessProps> {
  render() {
    return <BaseIcon type="success" { ...this.props} />;
  }
}

