import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface VoiceProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Voice extends React.Component<VoiceProps> {
  render() {
    return <BaseIcon type="voice" { ...this.props} />;
  }
}

