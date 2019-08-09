import * as React from 'react';
import { WingSpaceSizeProps, CustomProps } from '../_util/customProps';
import './style';
interface WhiteSpaceProps extends WingSpaceSizeProps, CustomProps {
    type: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export default class WhiteSpace extends React.Component<WhiteSpaceProps> {
    render(): JSX.Element;
}
export {};
