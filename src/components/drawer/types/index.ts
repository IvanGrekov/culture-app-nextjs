import { CSSProperties, PropsWithChildren } from 'react';

export interface IDrawerProps extends PropsWithChildren {
    isOpen: boolean;
    onClose: VoidFunction;
    position?: 'left' | 'right';
    shouldAddCloseButton?: boolean;
    style?: CSSProperties;
    className?: string;
}
