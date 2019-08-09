import React, { Component } from 'react';
import classnames from 'classnames';
import { setPrefix } from 'components/_util/setPrefix';
export default class FlexItem extends Component {
    render() {
        const { className } = this.props;
        const prefixCls = setPrefix('flex-item');
        const wrapCls = classnames(className, prefixCls);
        return React.createElement("div", { className: wrapCls });
    }
}
//# sourceMappingURL=FlexItem.js.map