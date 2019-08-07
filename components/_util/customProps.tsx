import * as React from 'react';

export interface WingBlankSizeProps {
  size: 'lg' | 'md' | 'sm';
}
export interface WingSpaceSizeProps {
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

export interface IconSizeProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
}

export interface EventProps {
  onEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onKeyDown?: React.MouseEventHandler<HTMLAnchorElement>;
  onKeyUp?: React.MouseEventHandler<HTMLAnchorElement>;
  onChange?: React.MouseEventHandler<HTMLAnchorElement>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onFocus?: React.MouseEventHandler<HTMLAnchorElement>;
  onBlur?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface CustomProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
