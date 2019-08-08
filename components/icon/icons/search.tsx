import * as React from "react";
import BaseIcon from './BaseIcon';
import { IconSizeProps, CustomProps } from '../../_util/customProps';

interface SearchProps extends IconSizeProps, CustomProps {
  width?: string | number;
  height?: string | number;
}

export class Search extends React.Component<SearchProps> {
  render() {
    return <BaseIcon type="search" { ...this.props} />;
  }
}

