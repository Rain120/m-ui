import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface DownProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Down extends React.Component<DownProps> {
  render() {
    return <BaseIcon type="down" { ...this.props} />;
  }
}

