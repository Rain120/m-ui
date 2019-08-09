import { Component } from 'react';
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface BaseIconProps extends IconSizeProps, CustomProps {
    type: string;
    width?: string | number;
    height?: string | number;
    fill?: string;
    stroke?: string;
}
export default class BaseIcon extends Component<BaseIconProps> {
    static defaultProps: {
        size: string;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
