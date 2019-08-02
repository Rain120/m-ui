import React, { Component } from 'react';
import className from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import './style/index';
export default class Alert extends Component {
    render() {
        const { type = 'info', message } = this.props;
        const prefix = setPrefix('alert');
        return (React.createElement("div", { className: className(prefix, `${prefix}-${type}`) }, message));
    }
}
//# sourceMappingURL=index.js.map