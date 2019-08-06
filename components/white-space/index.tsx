import * as React from 'react';
import classname from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import './style';

interface WhiteSpaceProps {
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  className?: string;
  style?: React.CSSProperties;
}

export default class WhiteSpace extends React.Component<WhiteSpaceProps> {

  render() {
    const { size = 'md', style, className } = this.props;
    const prefix = setPrefix('white-space');
    const wrapCls = classname(prefix, `${prefix}-${size}`, className);

    return (
      <div className={wrapCls} style={style} />
    )
  }
}
