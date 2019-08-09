import * as React from 'react';
import './style';
interface AlertProps {
    type?: 'success' | 'error' | 'warn' | 'info';
    message: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    banner?: boolean;
}
export default class Alert extends React.Component<AlertProps> {
    render(): JSX.Element;
}
export {};
