import React, { Component } from 'react';
import classnames from 'classnames';
import { FlexPropsType } from './PropsType';
import { CustomProps } from '../_util/customProps';
import { setPrefix } from 'components/_util/setPrefix';

interface FlexItemProps extends FlexPropsType, CustomProps {
  style?: React.CSSProperties;
}

export default class FlexItem extends Component<FlexItemProps> {
  render() {
    const {
      className,
      children,
      style,
      ...resetProps
    } = this.props;
    const prefixCls = setPrefix('flex-item');
    const wrapCls = classnames(
      className,
      prefixCls
    );
    return (
      <div className={wrapCls} style={style} { ...resetProps }>
        {children}
      </div>
    );
  }
}
