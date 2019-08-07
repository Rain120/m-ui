import * as React from 'react';
import classname from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import { WingSpaceSizeProps, CustomProps } from '../_util/customProps';
import './style';

interface WhiteSpaceProps extends WingSpaceSizeProps, CustomProps{
  type: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default class WhiteSpace extends React.Component<WhiteSpaceProps> {

  render() {
    const { size = 'md', className } = this.props;
    const prefix = setPrefix('white-space');
    const wrapCls = classname(prefix, `${prefix}-${size}`, className);

    return (
      <div className={wrapCls} />
    )
  }
}
