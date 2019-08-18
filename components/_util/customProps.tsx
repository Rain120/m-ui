export interface WingBlankSizeProps {
  size: 'lg' | 'md' | 'sm';
}
export interface WingSpaceSizeProps {
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

export interface IconSizeProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
}

export type ThemeType = 'filled' | 'outlined';

export interface SvgProps {
  viewBox?: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
  theme?: ThemeType;
  spin?: boolean;
  rotate?: number;
}

export interface CustomIconProps {
  viewBox?: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
  theme?: ThemeType;
  spin?: boolean;
  rotate?: number;
  component?: React.ComponentType<SvgProps>;
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
