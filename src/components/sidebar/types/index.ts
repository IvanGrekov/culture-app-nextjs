import { IDrawerProps } from 'components/drawer/types';

export type TSidebarProps = Pick<
    IDrawerProps,
    'shouldAddCloseButton' | 'children' | 'className'
>;
