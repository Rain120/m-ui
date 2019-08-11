import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
export class Minus extends Component {
    render() {
        return (React.createElement(SvgWrapper, Object.assign({}, this.props),
            React.createElement("path", { d: "M0 0h30v2H0z", fillRule: "evenodd" })));
    }
}
Minus.defaultProps = {
    type: 'minus',
    viewBox: '0 0 30 2',
};
//# sourceMappingURL=minus.js.map