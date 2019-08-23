import React, { Component } from 'react';
import classname from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { setPrefix } from '../_util/setPrefix';
import { CustomProps } from '../_util/customProps';
import Icon from '../icon';
import './style';

interface ButtonProps extends CustomProps {
  size: 'small' | 'large';
  type?: 'primary' | 'warning' | 'dashed' | 'danger' | 'ghost' | 'link';
  shape?: 'circle' | 'round';
  icon?: string;
  block?: boolean;
  loading?: boolean | { delay?: number };
  href: string;
  target?: string;
  ghost: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

class Button extends Component<ButtonProps> {
  constructor(props) {
    super(props);
  }

  state = {
    loading: this.props.loading,
  };

  static defaultProps = {
    loading: false,
    ghost: false,
    block: false,
  };

  private delayTimeout: number;

  componentDidUpdate(prevProps: ButtonProps) {
    if (prevProps.loading && typeof prevProps.loading !== 'boolean') {
      clearTimeout(this.delayTimeout);
    }

    const { loading } = this.props;
    if (loading && typeof loading !== 'boolean' && loading.delay) {
      this.delayTimeout = window.setTimeout(() => this.setState({ loading }), loading.delay);
    } else if (prevProps.loading !== this.props.loading) {
      this.setState({ loading });
    }
  }

  componentWillUnmount() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  }

  handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
    const { loading } = this.state;
    const { onClick } = this.props;
    if (loading) {
      return;
    }
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }

  isNeedInserted() {
    const { icon, children } = this.props;
    return React.Children.count(children) === 1 && !icon;
  }

  renderButton() {
    const { type, size, shape, block, icon, className, children, ghost, ...restProps } = this.props;
    const prefixCls = setPrefix('btn');

    let sizeCls = '';
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
        break;
      default:
        break;
    }

    const { loading } = this.state;

    const wrapCls = classname(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${sizeCls}`]: size,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${block}`]: block,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-background-ghost`]: ghost,
      [`${prefixCls}-icon-only`]: !children && children !== 0 && icon,
      [`${prefixCls}-loading`]: loading,
    });

    const iconType = loading ? 'loading' : icon;
    const iconNode = iconType ? <Icon type={iconType} /> : null;

    const kids =
      children || children === 0
        ? this.isNeedInserted() && children
        : null;

    const buttonNode = (
        <button
          className={wrapCls}
          onClick={this.handleClick}
        >
          {iconNode}
          {kids}
        </button>
      );
  
      if (type === 'link') {
        return buttonNode;
      }

    return buttonNode;
  }

  render() {
    return (
      <>
        {this.renderButton()}
      </>
    );
  }
}

polyfill(Button);

export default Button;
