import React, { Component } from 'react';
import classname from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import './style';
export default class WhiteSpace extends Component {
    render() {
        const { size = 'md', className } = this.props;
        const prefix = setPrefix('white-space');
        const wrapCls = classname(prefix, `${prefix}-${size}`, className);
        return (React.createElement("div", { className: wrapCls }));
    }
}
//# sourceMappingURL=index.js.map