import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface EllipsisProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Ellipsis extends React.Component<EllipsisProps> {
    render(): JSX.Element;
}
export {};
