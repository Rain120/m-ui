import * as React from 'react';
import { IconSizeProps, CustomProps } from '../_util/customProps';
import './style';
interface IconProps extends IconSizeProps, CustomProps {
    type: string;
    width?: string | number;
    height?: string | number;
}
export default class Icon extends React.Component<IconProps> {
    renderSvg(): JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
