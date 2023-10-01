import { useRef, useId } from 'react';

import {
    ISelectFieldHandlersArgs,
    IUseSelectFieldResult,
} from 'components/select/types';

export const useSelectField = <
    T,
>({}: ISelectFieldHandlersArgs<T>): IUseSelectFieldResult<T> => {
    const nativeSelectRef = useRef<HTMLSelectElement>(null);
    const customSelectRef = useRef<HTMLInputElement>(null);

    const id = useId();

    // TODO: handle focus, blur, click

    return {
        nativeSelectRef,
        customSelectRef,
        id,
        isOpen: false,
        isFocused: false,
        isFieldFilled: false,
    };
};
