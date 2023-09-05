import { useEffect } from 'react';

import { useConfirmNavigationContext } from 'contexts/ConfirmNavigationContext';

export const useDirtyFormNavigationConfirmation = (
    isFormDirty: boolean,
): void => {
    const { setShouldConfirmNavigation } = useConfirmNavigationContext();

    useEffect(() => {
        setShouldConfirmNavigation(isFormDirty);
    }, [setShouldConfirmNavigation, isFormDirty]);
};
