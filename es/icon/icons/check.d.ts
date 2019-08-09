import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface CheckProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Check extends React.Component<CheckProps> {
    render(): JSX.Element;
}
export {};
