import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface RightProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Right extends React.Component<RightProps> {
  render() {
    return <BaseIcon type="right" { ...this.props} />;
  }
}

