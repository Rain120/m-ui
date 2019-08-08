import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface CrossProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Cross extends React.Component<CrossProps> {
  render() {
    return <BaseIcon type="cross" { ...this.props} />;
  }
}

