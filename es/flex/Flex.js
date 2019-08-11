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
import classnames from 'classnames';
import { setPrefix } from 'components/_util/setPrefix';
export default class Flex extends Component {
    render() {
        const _a = this.props, { align, direction, justify, wrap, alignContent, className, children, style } = _a, resetProps = __rest(_a, ["align", "direction", "justify", "wrap", "alignContent", "className", "children", "style"]);
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
        return (React.createElement("div", Object.assign({ className: wrapCls, style: style }, resetProps), children));
    }
}
Flex.defaultProps = {
    align: 'center',
};
//# sourceMappingURL=Flex.js.map