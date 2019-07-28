import React, { Component } from 'react';
import classnames from 'classnames';
import { setPrefix } from '../_util/setPrefix';
import './style/index';
export default class Alert extends Component {
    render() {
        const { type = 'info' } = this.props;
        const prefix = setPrefix('alert');
        return (<div className={classnames(prefix, `${prefix}-${type}`)}>
          {this.props.message}
      </div>);
    }
}
//# sourceMappingURL=index.jsx.map