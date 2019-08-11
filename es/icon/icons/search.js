import React, { Component } from 'react';
import SvgWrapper from './SvgWrapper';
export class Search extends Component {
    render() {
        return (React.createElement(SvgWrapper, Object.assign({}, this.props),
            React.createElement("path", { d: "M32.98 29.255l8.915 8.293L39.603 40l-8.86-8.242a15.952 15.952 0 0 1-10.753 4.147C11.16 35.905 4 28.763 4 19.952 4 11.142 11.16 4 19.99 4s15.99 7.142 15.99 15.952c0 3.472-1.112 6.685-3 9.303zm.05-9.21c0 7.123-5.7 12.918-12.88 12.918-7.176 0-13.015-5.795-13.015-12.918 0-7.12 5.84-12.917 13.017-12.917 7.178 0 12.88 5.797 12.88 12.917z", fillRule: "evenodd" })));
    }
}
Search.defaultProps = {
    type: 'search',
    viewBox: '0 0 44 44',
};
//# sourceMappingURL=search.js.map