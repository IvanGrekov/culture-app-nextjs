import { useRef, useLayoutEffect } from 'react';

import { lockBodyScroll, unlockBodyScroll } from 'utils/scroll.utils';

export const useBodyScrollLock = (isLocked: boolean): void => {
    const scrollY = useRef<number>(0);

    useLayoutEffect(() => {
        if (isLocked) {
            scrollY.current = window.scrollY;
            lockBodyScroll();
        } else {
            unlockBodyScroll();
        }

        return (): void => {
            unlockBodyScroll();
            if (isLocked) {
                window.scrollTo(0, scrollY.current);
            }
        };
    }, [isLocked]);
};
