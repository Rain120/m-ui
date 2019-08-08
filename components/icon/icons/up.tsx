import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface UpProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Up extends React.Component<UpProps> {
  render() {
    return <BaseIcon type="up" { ...this.props} />;
  }
}

