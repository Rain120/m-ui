import * as React from 'react';
import { WingBlankSizeProps, CustomProps } from '../_util/customProps';
import './style';
interface WingBlankProps extends WingBlankSizeProps, CustomProps {
}
export default class WingBlank extends React.Component<WingBlankProps> {
    render(): JSX.Element;
}
export {};
