import React, { Component } from 'react';
import classnames from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import { WingSpaceSizeProps, CustomProps } from '../_util/customProps';
import './style';

interface WhiteSpaceProps extends WingSpaceSizeProps, CustomProps{
  type: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default class WhiteSpace extends Component<WhiteSpaceProps> {

  render() {
    const { size = 'md', className } = this.props;
    const prefix = setPrefix('white-space');
    const wrapCls = classnames(prefix, `${prefix}-${size}`, className);

    return (
      <div className={wrapCls} />
    )
  }
}
