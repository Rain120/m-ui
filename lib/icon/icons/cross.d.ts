import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface CrossProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Cross extends React.Component<CrossProps> {
    render(): JSX.Element;
}
export {};
