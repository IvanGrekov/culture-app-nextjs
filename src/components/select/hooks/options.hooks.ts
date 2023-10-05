import { useState, useEffect, RefObject } from 'react';

import {
    getSelectOptionsHeight,
    getIsOptionsFixed,
    makeOptionsFixed,
    resetOptionsFixed,
} from 'components/select/utils/options.utils';
import {
    getCustomSelectBottomPosition,
    getCustomSelectWidth,
} from 'components/select/utils/select.utils';

type TUseFixedSelectOptions = (args: {
    isOpen: boolean;
    customSelectRef: RefObject<HTMLInputElement>;
    selectOptionsRef: RefObject<HTMLDivElement>;
}) => { isOptionsFixed: boolean };

export const useFixedSelectOptions: TUseFixedSelectOptions = ({
    isOpen,
    customSelectRef,
    selectOptionsRef,
}) => {
    const [isOptionsFixed, setIsOptionsFixed] = useState(false);

    useEffect(() => {
        const customSelect = customSelectRef.current;
        const selectOptions = selectOptionsRef.current;

        if (!customSelect || !selectOptions) {
            return;
        }

        const customSelectBottomPosition =
            getCustomSelectBottomPosition(customSelect);
        const selectOptionsHeight = getSelectOptionsHeight(selectOptions);
        const selectOptionsWidth = getCustomSelectWidth(customSelect);
        const isOptionsFixed = getIsOptionsFixed({
            customSelectBottomPosition,
            selectOptionsHeight,
        });

        if (isOptionsFixed) {
            setIsOptionsFixed(true);
            makeOptionsFixed({
                selectOptions,
                customSelectBottomPosition,
                selectOptionsHeight,
                selectOptionsWidth,
            });
        } else {
            setIsOptionsFixed(false);
            resetOptionsFixed(selectOptions);
        }
    }, [isOpen, customSelectRef, selectOptionsRef]);

    return { isOptionsFixed };
};
