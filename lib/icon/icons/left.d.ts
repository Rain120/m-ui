import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface LeftProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Left extends React.Component<LeftProps> {
    render(): JSX.Element;
}
export {};
