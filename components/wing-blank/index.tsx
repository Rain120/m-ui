import * as React from 'react';
import classname from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import { WingBlankSizeProps, CustomProps } from '../_util/customProps';
import './style';

interface WingBlankProps extends WingBlankSizeProps, CustomProps {}

export default class WingBlank extends React.Component<WingBlankProps> {

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
