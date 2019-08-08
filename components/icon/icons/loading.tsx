import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface LoadingProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Loading extends React.Component<LoadingProps> {
  render() {
    return <BaseIcon type="loading" { ...this.props} />;
  }
}

