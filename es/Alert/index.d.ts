import React, { Component } from 'react';
import './style/index';
interface IAlertProps {
    type?: 'success' | 'error' | 'warn' | 'info';
    message: React.ReactNode;
    className?: String;
}
export default class Alert extends Component<IAlertProps> {
    render(): JSX.Element;
}
export {};
