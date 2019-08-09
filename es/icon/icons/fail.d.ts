import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface FailProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Fail extends React.Component<FailProps> {
    render(): JSX.Element;
}
export {};
