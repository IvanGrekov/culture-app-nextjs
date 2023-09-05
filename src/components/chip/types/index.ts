import { TTypographyVariants } from 'components/typography/types';

export interface IChipProps {
    title: string;
    variant?: 'contained' | 'outlined';
    titleVariant?: TTypographyVariants;
    className?: string;
    onDelete?: () => void;
}
