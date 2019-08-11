import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
export class Up extends Component {
    render() {
        return (React.createElement(SvgWrapper, Object.assign({}, this.props),
            React.createElement("path", { fill: "none", d: "M-1-1h46v46H-1z" }),
            React.createElement("defs", null,
                React.createElement("path", { id: "a", d: "M-129-845h24v24h-24z" })),
            React.createElement("clipPath", { id: "b" },
                React.createElement("use", { href: "#a" })),
            React.createElement("g", { clipPath: "url(#b)" },
                React.createElement("defs", null,
                    React.createElement("path", { id: "c", d: "M-903-949H947V996H-903z" }))),
            React.createElement("path", { d: "M23.417 14.23L11.184 26.46l2.12 2.12 10.12-10.117 10.118 10.118 2.12-2.12L23.43 14.228l-.006.005z" })));
    }
}
Up.defaultProps = {
    type: 'up',
    viewBox: '0 0 44 44',
};
//# sourceMappingURL=up.js.map