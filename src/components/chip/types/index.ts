import { MouseEvent } from 'react';

import { TTypographyVariants } from 'components/typography/types';

export interface IChipProps {
    title: string;
    variant?: 'contained' | 'outlined';
    size?: 'small' | 'regular' | 'big';
    titleVariant?: TTypographyVariants;
    className?: string;
    onDelete?: (e: MouseEvent<HTMLButtonElement>) => void;
}
