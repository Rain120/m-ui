import * as React from 'react';
import classname from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import './style';
export default class WingBlank extends React.Component {
    render() {
        const { size = 'lg', style, className, children } = this.props;
        const prefix = setPrefix('wing-blank');
        const wrapCls = classname(prefix, `${prefix}-${size}`, className);
        return (React.createElement("div", { className: wrapCls, style: style }, children));
    }
}
//# sourceMappingURL=index.js.map