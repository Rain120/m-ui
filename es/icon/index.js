var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { setPrefix } from '../_util/setPrefix';
import { WrapperComponent } from '../_util/WrapperComponent';
import { getIcon } from './icons/index';
import warning from "../_util/warning";
import './style';
export default class Icon extends Component {
    renderSvg() {
        return __awaiter(this, void 0, void 0, function* () {
            const _a = this.props, { type } = _a, restProps = __rest(_a, ["type"]);
            yield getIcon(type).then(res => {
                let compName = type.replace(/\b\w/, $0 => $0.toUpperCase());
                let Comp = res[compName];
                console.log(res, compName, Comp);
                return WrapperComponent(Comp, restProps);
            });
        });
    }
    render() {
        const { style, className, type, viewBox, children, component: Component } = this.props;
        const prefixCls = setPrefix('icon');
        const wrapCls = classnames(prefixCls, className);
        let innerNode;
        const innerSvgProps = Object.assign({}, this.props);
        warning(Boolean(type || Component || children), 'Icon', 'Should have `type` prop or `component` prop or `children`.');
        if (!viewBox) {
            delete innerSvgProps['viewBox'];
        }
        if (Component) {
            innerNode = React.createElement(Component, null);
        }
        else if (children) {
            warning(Boolean(viewBox) ||
                (React.Children.count(children) === 1 &&
                    React.isValidElement(children) &&
                    React.Children.only(children).type === 'use'), 'Icon', 'Make sure that you provide correct `viewBox`' +
                ' prop (default `0 0 1024 1024`) to the icon.');
            innerNode = (React.createElement("svg", Object.assign({}, innerSvgProps, { viewBox: viewBox }), children));
        }
        return (React.createElement("div", { className: wrapCls, style: style }, Component ? innerNode : this.renderSvg()));
    }
}
//# sourceMappingURL=index.js.map