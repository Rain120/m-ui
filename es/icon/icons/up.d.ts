import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface UpProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Up extends React.Component<UpProps> {
    render(): JSX.Element;
}
export {};
