import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface EllipsisProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Ellipsis extends React.Component<EllipsisProps> {
  render() {
    return <BaseIcon type="ellipsis" { ...this.props} />;
  }
}

