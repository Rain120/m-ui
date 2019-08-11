import React, { Component } from 'react';
import classname from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import './style';
export default class Alert extends Component {
    render() {
        const { message, style, className, banner, } = this.props;
        let { type = 'info' } = this.props;
        const prefixCls = setPrefix('alert');
        type = banner && type === undefined ? 'warning' : type || 'info';
        const wrapCls = classname(prefixCls, `${prefixCls}-${type}`, {
            [`${prefixCls}-banner`]: !!banner,
        }, className);
        return (React.createElement("div", { className: wrapCls, style: style }, message));
    }
}
//# sourceMappingURL=index.js.map