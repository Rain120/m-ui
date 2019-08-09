import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface RightProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Right extends React.Component<RightProps> {
    render(): JSX.Element;
}
export {};
