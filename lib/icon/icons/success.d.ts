import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface SuccessProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Success extends React.Component<SuccessProps> {
    render(): JSX.Element;
}
export {};
