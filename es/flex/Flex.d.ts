import React, { Component } from 'react';
import { FlexItemPropsType } from './PropsType';
import { CustomProps } from '../_util/customProps';
interface FlexProps extends FlexItemPropsType, CustomProps {
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export default class Flex extends Component<FlexProps> {
    render(): JSX.Element;
}
export {};
