import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface DislikeProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Dislike extends React.Component<DislikeProps> {
  render() {
    return <BaseIcon type="dislike" { ...this.props} />;
  }
}

