import { useRef, useId, useState } from 'react';

import {
    ISelectFieldHandlersArgs,
    IUseSelectFieldResult,
} from 'components/select/types';
import { getSelectFieldHandlers } from 'components/select/utils';

export const useSelectField = <T>({
    onBlur,
    onFocus,
    onChange,
}: ISelectFieldHandlersArgs<T>): IUseSelectFieldResult<T> => {
    const nativeSelectRef = useRef<HTMLSelectElement>(null);
    const customSelectRef = useRef<HTMLInputElement>(null);

    const id = useId();

    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const selectFieldHandlers = getSelectFieldHandlers<T>({
        nativeSelectRef,
        setIsFocused,
        setIsOpen,
        onBlur,
        onFocus,
        onChange,
    });

    return {
        nativeSelectRef,
        customSelectRef,
        id,
        isOpen,
        isFocused,
        isFieldFilled: false,
        ...selectFieldHandlers,
    };
};
