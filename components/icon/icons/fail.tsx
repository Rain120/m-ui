import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface FailProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Fail extends React.Component<FailProps> {
  render() {
    return <BaseIcon type="fail" { ...this.props} />;
  }
}

