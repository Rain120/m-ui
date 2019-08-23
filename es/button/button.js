var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Component } from 'react';
import classname from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { setPrefix } from '../_util/setPrefix';
import Icon from '../icon';
import './style';
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: this.props.loading,
        };
        this.handleClick = e => {
            const { loading } = this.state;
            const { onClick } = this.props;
            if (loading) {
                return;
            }
            if (onClick) {
                onClick(e);
            }
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.loading && typeof prevProps.loading !== 'boolean') {
            clearTimeout(this.delayTimeout);
        }
        const { loading } = this.props;
        if (loading && typeof loading !== 'boolean' && loading.delay) {
            this.delayTimeout = window.setTimeout(() => this.setState({ loading }), loading.delay);
        }
        else if (prevProps.loading !== this.props.loading) {
            this.setState({ loading });
        }
    }
    componentWillUnmount() {
        if (this.delayTimeout) {
            clearTimeout(this.delayTimeout);
        }
    }
    isNeedInserted() {
        const { icon, children } = this.props;
        return React.Children.count(children) === 1 && !icon;
    }
    renderButton() {
        const _a = this.props, { type, size, shape, block, icon, className, children, ghost } = _a, restProps = __rest(_a, ["type", "size", "shape", "block", "icon", "className", "children", "ghost"]);
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
        const iconNode = iconType ? React.createElement(Icon, { type: iconType }) : null;
        const kids = children || children === 0
            ? this.isNeedInserted() && children
            : null;
        const buttonNode = (React.createElement("button", { className: wrapCls, onClick: this.handleClick },
            iconNode,
            kids));
        if (type === 'link') {
            return buttonNode;
        }
        return buttonNode;
    }
    render() {
        return (React.createElement(React.Fragment, null, this.renderButton()));
    }
}
Button.defaultProps = {
    loading: false,
    ghost: false,
    block: false,
};
polyfill(Button);
export default Button;
//# sourceMappingURL=button.js.map