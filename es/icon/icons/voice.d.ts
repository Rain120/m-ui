import * as React from "react";
import { IconSizeProps, CustomProps } from '../../_util/customProps';
interface VoiceProps extends IconSizeProps, CustomProps {
    width?: string | number;
    height?: string | number;
}
export declare class Voice extends React.Component<VoiceProps> {
    render(): JSX.Element;
}
export {};
