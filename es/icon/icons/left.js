import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
export class Left extends Component {
    render() {
        return (React.createElement(SvgWrapper, Object.assign({}, this.props),
            React.createElement(React.Fragment, null,
                React.createElement("defs", null,
                    React.createElement("path", { id: "a", d: "M-129-845h24v24h-24z" })),
                React.createElement("clipPath", { id: "b" },
                    React.createElement("use", { href: "#a", overflow: "visible" })),
                React.createElement("g", { clipPath: "url(#b)" },
                    React.createElement("defs", null,
                        React.createElement("path", { id: "c", d: "M-903-949H947V996H-903z" }))),
                React.createElement("path", { d: "M16.247 21.4L28.48 9.165l2.12 2.12-10.117 10.12L30.6 31.524l-2.12 2.12-12.233-12.232.007-.006z" }))));
    }
}
Left.defaultProps = {
    type: 'left',
    viewBox: '0 0 44 44',
};
//# sourceMappingURL=left.js.map