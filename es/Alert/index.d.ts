import React, { Component } from 'react';
import './style/index';
export interface IAlertProps {
    type?: 'success' | 'error' | 'warn' | 'info';
    message: String | React.ReactNode;
    className?: String;
}
export default class Alert extends Component<IAlertProps> {
    render(): JSX.Element;
}
