import { Component } from 'react';
import { FlexPropsType } from './PropsType';
import { CustomProps } from '../_util/customProps';
interface FlexItemProps extends FlexPropsType, CustomProps {
}
export default class FlexItem extends Component<FlexItemProps> {
    render(): JSX.Element;
}
export {};
