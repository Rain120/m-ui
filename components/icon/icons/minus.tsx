import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface MinusProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Minus extends React.Component<MinusProps> {
  render() {
    return <BaseIcon type="minus" { ...this.props} />;
  }
}

