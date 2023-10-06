import { RefObject, Dispatch, SetStateAction } from 'react';

import {
    ISelectFieldHandlersArgs,
    ISelectFieldHandlers,
} from 'components/select/types';

type TGetSelectFieldHandlersArgs<T> = ISelectFieldHandlersArgs<T> & {
    nativeSelectRef: RefObject<HTMLSelectElement>;
    setIsFocused: Dispatch<SetStateAction<boolean>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const getSelectFieldHandlers = <T>({
    nativeSelectRef,
    setIsFocused,
    setIsOpen,
    onFocus,
    onBlur,
}: TGetSelectFieldHandlersArgs<T>): ISelectFieldHandlers<T> => {
    const toggleSelect = (): void => {
        setIsFocused((prev) => !prev);
        setIsOpen((prev) => {
            if (!prev) {
                nativeSelectRef.current?.focus();
            }

            return !prev;
        });
    };

    const closeSelect = (): void => {
        setIsFocused(false);
        setIsOpen(false);
    };

    return {
        onSelectFocus: (e): void => {
            onFocus?.(e);
        },
        onSelectBlur: (e): void => {
            onBlur?.(e);
        },
        onSelectKeyDown: (e): void => {
            const key = e.key;

            if (key === 'Tab') {
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            switch (key) {
                case 'Escape':
                    closeSelect();
                    break;

                case 'Enter':
                    toggleSelect();
                    break;

                // NOTE: Space key
                case ' ':
                    toggleSelect();
                    break;
            }
        },
        onWrapperClick: (): void => {
            nativeSelectRef.current?.focus();
            setIsFocused(true);
            setIsOpen(true);
        },
        onWrapperBlur: (): void => {
            closeSelect();
        },
        onArrowButtonClick: (e): void => {
            e.stopPropagation();
            toggleSelect();
        },
    };
};

export const getCustomSelectBottomPosition = (
    customSelect: HTMLInputElement,
): number => {
    return customSelect.getBoundingClientRect().bottom;
};

export const getCustomSelectWidth = (
    customSelect: HTMLInputElement,
): number => {
    return customSelect.clientWidth;
};
