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
export default class SvgWrapper extends Component {
    render() {
        const _a = this.props, { size, type, className, children } = _a, resetProps = __rest(_a, ["size", "type", "className", "children"]);
        const wrapCls = classnames(className, 'rmc-ui-icon', `rmc-ui-icon-${type}`, `rmc-ui-icon-${size}`);
        return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", className: wrapCls }, resetProps), children));
    }
}
SvgWrapper.defaultProps = {
    size: 'md',
};
//# sourceMappingURL=SvgWrapper.js.map