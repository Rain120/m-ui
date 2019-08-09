import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface PlusProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Plus extends React.Component<PlusProps> {
    render(): JSX.Element;
}
export {};
