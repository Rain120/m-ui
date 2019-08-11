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
export class Dislike extends Component {
    render() {
        const _a = this.props, { fill } = _a, resetProps = __rest(_a, ["fill"]);
        return (React.createElement(SvgWrapper, Object.assign({}, resetProps),
            React.createElement("g", { fill: "none", fillRule: "evenodd" },
                React.createElement("path", { d: "M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z", fill: fill }),
                React.createElement("path", { fill: fill, d: "M47 22h2v6h-2zm-24 0h2v6h-2z" }),
                React.createElement("path", { d: "M21 51s4.6-7 15-7 15 7 15 7", stroke: fill, strokeWidth: "2" }))));
    }
}
Dislike.defaultProps = {
    type: 'dislike',
    viewBox: '0 0 72 72',
    fill: '#000'
};
//# sourceMappingURL=dislike.js.map