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
export class Loading extends Component {
    render() {
        const _a = this.props, { fill, stroke } = _a, resetProps = __rest(_a, ["fill", "stroke"]);
        return (React.createElement(SvgWrapper, Object.assign({}, resetProps),
            React.createElement("path", { fill: fill, d: 'M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z' }),
            React.createElement("path", { fill: 'none', stroke: stroke, strokeWidth: '3', strokeLinecap: 'round', strokeMiterlimit: '10', d: 'M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552' })));
    }
}
Loading.defaultProps = {
    type: 'loading',
    viewBox: '0 -2 59.75 60.25',
    fill: '#ccc',
    stroke: '#108ee9'
};
//# sourceMappingURL=loading.js.map