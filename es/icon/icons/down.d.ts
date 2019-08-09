import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface DownProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Down extends React.Component<DownProps> {
    render(): JSX.Element;
}
export {};
