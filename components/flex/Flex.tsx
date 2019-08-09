import React, { Component } from 'react';
import classnames from 'classnames';
import { FlexPropsType } from './PropsType';
import { CustomProps } from '../_util/customProps';
import { setPrefix } from 'components/_util/setPrefix';

interface FlexProps extends FlexPropsType, CustomProps {
  alignContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default class Flex extends Component<FlexProps> {
  static Item: any;

  static defaultProps = {
    align: 'center',
  };

  render() {
    const {
        align,
        direction,
        justify,
        wrap,
        alignContent,
        className,
        children,
        style,
        ...resetProps
    } = this.props;
    const prefixCls = setPrefix('flex');

    const wrapCls = classnames(className, prefixCls, {
      [`${prefixCls}-align-start`]: align === 'start',
      [`${prefixCls}-align-center`]: align === 'center',
      [`${prefixCls}-align-end`]: align === 'end',
      [`${prefixCls}-align-baseline`]: align === 'baseline',
      [`${prefixCls}-align-stretch`]: align === 'stretch',

      [`${prefixCls}-direction-row`]: direction === 'row',
      [`${prefixCls}-direction-row-reverse`]: direction === 'row-reverse',
      [`${prefixCls}-direction-column`]: direction === 'column',
      [`${prefixCls}-direction-column-reverse`]: direction === 'column-reverse',

      [`${prefixCls}-justify-start`]: justify === 'start',
      [`${prefixCls}-justify-end`]: justify === 'end',
      [`${prefixCls}-justify-center`]: justify === 'center',
      [`${prefixCls}-justify-between`]: justify === 'between',
      [`${prefixCls}-justify-around`]: justify === 'around',

      [`${prefixCls}-nowrap`]: wrap === 'nowrap',
      [`${prefixCls}-wrap`]: wrap === 'wrap',
      [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

      [`${prefixCls}-align-content-start`]: alignContent === 'start',
      [`${prefixCls}-align-content-end`]: alignContent === 'end',
      [`${prefixCls}-align-content-center`]: alignContent === 'center',
      [`${prefixCls}-align-content-between`]: alignContent === 'between',
      [`${prefixCls}-align-content-around`]: alignContent === 'around',
      [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch',
    });

    return (
      <div className={wrapCls} style={style} {...resetProps}>
        {children}
      </div>
    );
  }
}
