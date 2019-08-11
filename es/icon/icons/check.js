import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
export class Check extends Component {
    render() {
        return (React.createElement(SvgWrapper, Object.assign({}, this.props),
            React.createElement("path", { fillRule: "evenodd", d: "M34.538 8L38 11.518 17.808 32 8 22.033l3.462-3.518 6.346 6.45z" })));
    }
}
Check.defaultProps = {
    type: 'check',
    viewBox: '0 0 44 44',
};
//# sourceMappingURL=check.js.map