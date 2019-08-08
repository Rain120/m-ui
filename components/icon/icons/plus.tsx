import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface PlusProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Plus extends React.Component<PlusProps> {
  render() {
    return <BaseIcon type="plus" { ...this.props} />;
  }
}

