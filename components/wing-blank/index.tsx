import * as React from 'react';
import classname from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import './style';

interface WingSpaceProps {
  size?: 'lg' | 'md' | 'sm';
  className?: string;
  style?: React.CSSProperties;
}

export default class WingSpace extends React.Component<WingSpaceProps> {

  render() {
    const { size = 'lg', style, className, children } = this.props;
    const prefix = setPrefix('wing-blank');
    const wrapCls = classname(prefix, `${prefix}-${size}`, className);

    return (
      <div className={wrapCls} style={style}>
        {children}
      </div>
    )
  }
}
