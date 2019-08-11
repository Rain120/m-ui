import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
export class Right extends Component {
    render() {
        return (React.createElement(SvgWrapper, Object.assign({}, this.props),
            React.createElement("defs", null,
                React.createElement("path", { id: "a", d: "M-129-845h24v24h-24z" })),
            React.createElement("clipPath", { id: "b" },
                React.createElement("use", { href: "#a", overflow: "visible" })),
            React.createElement("g", { clipPath: "url(#b)" },
                React.createElement("defs", null,
                    React.createElement("path", { id: "c", d: "M-903-949H947V996H-903z" }))),
            React.createElement("path", { d: "M30.6 21.4L18.37 9.165l-2.12 2.12 10.117 10.12-10.118 10.118 2.12 2.12 12.234-12.232-.005-.006z" })));
    }
}
Right.defaultProps = {
    type: 'right',
    viewBox: '0 0 44 44',
};
//# sourceMappingURL=right.js.map