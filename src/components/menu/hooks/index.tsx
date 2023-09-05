import { useState, MouseEvent } from 'react';

import { getElementWithOnClick } from 'components/menu/utils';

type TUseMenu = (OpenMenuElement?: JSX.Element) => {
    isOpen: boolean;
    OpenMenuElementWithOnClick: JSX.Element | null;
    onDeactivate: VoidFunction;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const useMenu: TUseMenu = (OpenMenuElement) => {
    const [isOpen, setIsOpen] = useState(false);

    const onDeactivate = (): void => {
        setIsOpen(false);
    };

    const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        setIsOpen((prevState) => !prevState);
    };

    const OpenMenuElementWithOnClick = !OpenMenuElement
        ? null
        : getElementWithOnClick({ Element: OpenMenuElement, onClick });

    return {
        isOpen,
        OpenMenuElementWithOnClick,
        onDeactivate,
        onClick,
    };
};
