import { TTypographyVariants } from 'components/typography/types';

interface IAccordionItemProps {
    isOpen: boolean;
}

export interface IAccordionHeaderProps extends IAccordionItemProps {
    title: string;
    titleVariant?: TTypographyVariants;
    onClick: VoidFunction;
}

export interface IAccordionContentProps extends IAccordionItemProps {
    children: JSX.Element;
}

export type TAccordionProps = Pick<
    IAccordionHeaderProps,
    'title' | 'titleVariant'
> &
    Pick<IAccordionContentProps, 'children'> & {
        isSpaced?: boolean;
    };
