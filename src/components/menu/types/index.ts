import { ReactElement } from 'react';

import { IButtonProps } from 'components/button/types';
import { IDividerProps } from 'components/divider/types';
import { ISpacingProps } from 'components/spacing/types';
import { ITooltipProps } from 'components/tooltip/types';

export type TMenuActionItemProps = Pick<
    IButtonProps,
    'text' | 'onClick' | 'Icon' | 'title'
>;

type TElement = ReactElement<
    TMenuActionItemProps | IDividerProps | ISpacingProps
>;

export interface IMenuProps {
    children: TElement | Array<TElement>;
    OpenMenuElement?: JSX.Element;
    tooltipPosition?: ITooltipProps['position'];
    tooltipClassName?: string;
    actionsClassName?: string;
    actionsActiveClassName?: string;
}
