import { useRef, useId, useState } from 'react';

import {
    ISelectFieldHandlersArgs,
    IUseSelectFieldResult,
} from 'components/select/types';

export const useSelectField = <T>({
    onBlur,
    onFocus,
}: ISelectFieldHandlersArgs<T>): IUseSelectFieldResult<T> => {
    const nativeSelectRef = useRef<HTMLSelectElement>(null);
    const customSelectRef = useRef<HTMLInputElement>(null);

    const id = useId();

    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return {
        nativeSelectRef,
        customSelectRef,
        id,
        isOpen,
        isFocused,
        isFieldFilled: false,
        onSelectFocus: (e): void => {
            onFocus?.(e);
        },
        onSelectBlur: (e): void => {
            onBlur?.(e);
        },
        onWrapperClick: (): void => {
            nativeSelectRef.current?.focus();
            setIsOpen(true);
            setIsFocused(true);
        },
        onWrapperBlur: (): void => {
            setIsOpen(false);
            setIsFocused(false);
        },
    };
};
