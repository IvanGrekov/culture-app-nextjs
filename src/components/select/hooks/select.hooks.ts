import { useRef, useId, useState, useEffect } from 'react';

import { useFixedSelectOptions } from 'components/select/hooks/options.hooks';
import {
    TUseLocalNativeSelectValueArgs,
    TUseLocalNativeSelectValueResult,
    TLocalNativeSelectValue,
    TUseSelectFieldArgs,
    TUseSelectFieldResult,
} from 'components/select/types';
import { getDefaultGetOptionValue } from 'components/select/utils/optionItem.utils';
import {
    getLocalNativeSelectValue,
    getSelectFieldHandlers,
} from 'components/select/utils/select.utils';

const useLocalNativeSelectValue = <T>({
    value,
    getOptionValue = getDefaultGetOptionValue(),
}: TUseLocalNativeSelectValueArgs<T>): TUseLocalNativeSelectValueResult => {
    const [localValue, setLocalValue] = useState<TLocalNativeSelectValue>(() =>
        getLocalNativeSelectValue({
            value,
            getOptionValue,
        }),
    );

    useEffect(() => {
        const newLocalValue = getLocalNativeSelectValue({
            value,
            getOptionValue,
        });
        setLocalValue(newLocalValue);
    }, [value, getOptionValue]);

    return {
        localNativeSelectValue: localValue,
        onNativeSelectChange: (): void => {
            // Placeholder
        },
    };
};

export const useSelectField = <T>({
    value,
    shouldCloseOnChange,
    getOptionValue,
    onBlur,
    onFocus,
    onChange,
}: TUseSelectFieldArgs<T>): TUseSelectFieldResult<T> => {
    const nativeSelectRef = useRef<HTMLSelectElement>(null);
    const customSelectRef = useRef<HTMLInputElement>(null);
    const selectOptionsRef = useRef<HTMLDivElement>(null);

    const id = useId();

    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const nativeSelectLocalValueState = useLocalNativeSelectValue({
        value,
        getOptionValue,
    });

    const { isOptionsFixed } = useFixedSelectOptions({
        isOpen,
        customSelectRef,
        selectOptionsRef,
    });

    const selectFieldHandlers = getSelectFieldHandlers<T>({
        nativeSelectRef,
        shouldCloseOnChange,
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
        ...nativeSelectLocalValueState,
        ...selectFieldHandlers,
    };
};
