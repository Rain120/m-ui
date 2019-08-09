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
import * as React from 'react';
import classname from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import * as IconsLists from './icons/index';
import './style';
export default class Icon extends React.Component {
    renderSvg() {
        const _a = this.props, { type } = _a, restProps = __rest(_a, ["type"]);
        switch (type) {
            case 'left':
                return React.createElement(IconsLists.Left, Object.assign({}, restProps));
            case 'right':
                return React.createElement(IconsLists.Right, Object.assign({}, restProps));
            case 'check':
                return React.createElement(IconsLists.Check, Object.assign({}, restProps));
            case 'cross':
                return React.createElement(IconsLists.Cross, Object.assign({}, restProps));
            case 'dislike':
                return React.createElement(IconsLists.Dislike, Object.assign({}, restProps));
            case 'down':
                return React.createElement(IconsLists.Down, Object.assign({}, restProps));
            case 'ellipsis':
                return React.createElement(IconsLists.Ellipsis, Object.assign({}, restProps));
            case 'fail':
                return React.createElement(IconsLists.Fail, Object.assign({}, restProps));
            case 'loading':
                return React.createElement(IconsLists.Loading, Object.assign({}, restProps));
            case 'minus':
                return React.createElement(IconsLists.Minus, Object.assign({}, restProps));
            case 'plus':
                return React.createElement(IconsLists.Plus, Object.assign({}, restProps));
            case 'search':
                return React.createElement(IconsLists.Search, Object.assign({}, restProps));
            case 'success':
                return React.createElement(IconsLists.Success, Object.assign({}, restProps));
            case 'up':
                return React.createElement(IconsLists.Up, Object.assign({}, restProps));
            case 'voice':
                return React.createElement(IconsLists.Voice, Object.assign({}, restProps));
        }
        return;
    }
    render() {
        const { style, className } = this.props;
        const prefixCls = setPrefix('icon');
        const wrapCls = classname(prefixCls, className);
        return (React.createElement("div", { className: wrapCls, style: style }, this.renderSvg()));
    }
}
//# sourceMappingURL=index.js.map