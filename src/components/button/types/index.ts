import { CSSProperties } from 'react';

import { IIconProps } from 'components/icons/types';
import { TTypographyVariants } from 'components/typography/types';

export interface IBaseButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    title?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    tabIndex?: number;
    className?: string;
}

export interface IButtonProps extends IBaseButtonProps {
    text: string;
    type?: 'button' | 'submit';
    form?: string;
    variant?: 'outlined' | 'contained' | 'ghost';
    size?: 'small' | 'big' | 'regular';
    textVariant?: TTypographyVariants;
    isLoading?: boolean;
    Icon?: (props: IIconProps) => JSX.Element;
    style?: CSSProperties;
    className?: string;
    color?: 'red' | 'green' | 'primary';
}

export interface IIconButtonProps extends IBaseButtonProps {
    Icon: (props: IIconProps) => JSX.Element;
    variant?: 'primary' | 'overlayed';
    iconSize?: IIconProps['size'];
}
