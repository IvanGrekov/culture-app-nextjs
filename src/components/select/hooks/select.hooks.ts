import { useRef, useId, useState } from 'react';

import { useFixedSelectOptions } from 'components/select/hooks/options.hooks';
import {
    ISelectFieldHandlersArgs,
    IUseSelectFieldResult,
} from 'components/select/types';
import { getSelectFieldHandlers } from 'components/select/utils/select.utils';

export const useSelectField = <T>({
    onBlur,
    onFocus,
    onChange,
}: ISelectFieldHandlersArgs<T>): IUseSelectFieldResult<T> => {
    const nativeSelectRef = useRef<HTMLSelectElement>(null);
    const customSelectRef = useRef<HTMLInputElement>(null);
    const selectOptionsRef = useRef<HTMLDivElement>(null);

    const id = useId();

    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { isOptionsFixed } = useFixedSelectOptions({
        isOpen,
        customSelectRef,
        selectOptionsRef,
    });

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
        selectOptionsRef,
        id,
        isOpen,
        isFocused,
        isOptionsFixed,
        isFieldFilled: false,
        ...selectFieldHandlers,
    };
};
