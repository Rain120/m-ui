import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface SearchProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Search extends React.Component<SearchProps> {
    render(): JSX.Element;
}
export {};
