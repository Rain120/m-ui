import React, { Component } from 'react';
import classnames from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import { IconSizeProps, CustomProps } from '../_util/customProps';
import * as IconsLists from './icons/index';
import './style';

interface IconProps extends IconSizeProps, CustomProps {
  type: string;
  width?: string | number;
  height?: string | number;
}

export default class Icon extends Component<IconProps> {

  renderSvg() {
    const { type, ...restProps } = this.props;
    switch(type) {
      case 'left':
        return <IconsLists.Left { ...restProps } />;
      case 'right':
        return <IconsLists.Right { ...restProps } />;
      case 'check':
        return <IconsLists.Check { ...restProps } />;
      case 'cross':
        return <IconsLists.Cross { ...restProps } />;
      case 'dislike':
        return <IconsLists.Dislike { ...restProps } />;
      case 'down':
        return <IconsLists.Down { ...restProps } />;
      case 'ellipsis':
        return <IconsLists.Ellipsis { ...restProps } />;
      case 'loading':
        return <IconsLists.Loading { ...restProps } />;
      case 'minus':
        return <IconsLists.Minus { ...restProps } />;
      case 'plus':
        return <IconsLists.Plus { ...restProps } />;
      case 'search':
        return <IconsLists.Search { ...restProps } />;
      case 'up':
        return <IconsLists.Up { ...restProps } />;
      case 'voice':
        return <IconsLists.Voice { ...restProps } />;
    }
    return;
  }

  render() {
    const { style, className } = this.props;
    const prefixCls = setPrefix('icon');
    const wrapCls = classnames(prefixCls, className);

    return (
      <div className={wrapCls} style={style}>
        {this.renderSvg()}
      </div>
    )
  }
}
