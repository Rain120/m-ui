import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface LoadingProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Loading extends React.Component<LoadingProps> {
    render(): JSX.Element;
}
export {};
