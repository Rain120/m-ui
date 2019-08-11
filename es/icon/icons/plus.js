import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
export class Plus extends Component {
    render() {
        return (React.createElement(SvgWrapper, Object.assign({}, this.props),
            React.createElement("path", { d: "M14 14H0v2h14v14h2V16h14v-2H16V0h-2v14z", fillRule: "evenodd" })));
    }
}
Plus.defaultProps = {
    type: 'plus',
    viewBox: '0 0 30 30',
};
//# sourceMappingURL=plus.js.map