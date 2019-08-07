import * as React from 'react';
import classname from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import { IconSizeProps, CustomProps } from '../_util/customProps';
import './style';

interface IconProps extends IconSizeProps, CustomProps {
  type?: 'success' | 'error' | 'warn' | 'info';
}

export default class Icon extends React.Component<IconProps> {

  render() {
    const {
      style,
      className,
    } = this.props;
    const prefixCls = setPrefix('icon');
    const wrapCls = classname(prefixCls, className);

    return (
      <div className={wrapCls} style={style}>
      </div>
    )
  }
}
