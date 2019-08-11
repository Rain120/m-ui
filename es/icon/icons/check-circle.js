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
import SvgWrapper from './SvgWrapper';
export class CheckCircle extends Component {
    render() {
        const _a = this.props, { theme, component } = _a, resetProps = __rest(_a, ["theme", "component"]);
        return (React.createElement(SvgWrapper, Object.assign({}, resetProps), component ? null : theme === 'outlined' ? (React.createElement(React.Fragment, null,
            React.createElement("g", { fillRule: "evenodd" },
                React.createElement("path", { d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z" }),
                React.createElement("path", { d: "M12.2 23.2L10 25.3l10 9.9L37.2 15 35 13 19.8 30.8z" })))) : (theme === 'filled' && (React.createElement("path", { d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zM13.1 23.2l-2.2 2.1 10 9.9L38.1 15l-2.2-2-15.2 17.8-7.6-7.6z", fillRule: "evenodd" })))));
    }
}
CheckCircle.defaultProps = {
    type: 'check-circle',
    viewBox: '0 0 48 48',
    theme: 'outlined',
};
//# sourceMappingURL=check-circle.js.map