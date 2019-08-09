import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface MinusProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Minus extends React.Component<MinusProps> {
    render(): JSX.Element;
}
export {};
