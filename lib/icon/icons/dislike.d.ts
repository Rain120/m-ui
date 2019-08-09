import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface DislikeProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Dislike extends React.Component<DislikeProps> {
    render(): JSX.Element;
}
export {};
