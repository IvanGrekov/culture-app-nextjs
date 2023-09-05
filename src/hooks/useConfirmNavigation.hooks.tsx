import { useEffect } from 'react';

import { Router } from 'next/router';

import { useConfirmNavigationContext } from 'contexts/ConfirmNavigationContext';

type TUseRouterBlocker = (shouldConfirmNavigation: boolean) => void;

const useBrowserRouterBlocker: TUseRouterBlocker = (
    shouldConfirmNavigation,
) => {
    useEffect(() => {
        const beforeUnloadHandler = (
            beforeUnloadEvent: BeforeUnloadEvent,
        ): void | string => {
            if (shouldConfirmNavigation) {
                beforeUnloadEvent.preventDefault();
                beforeUnloadEvent.returnValue = '';

                return '';
            }
        };

        window.onbeforeunload = beforeUnloadHandler;
    }, [shouldConfirmNavigation]);
};

// NOTE: Next 13.4 doesn't support router blocker since Router doesn't support events
const useNextRouterBlocker: TUseRouterBlocker = (
    shouldConfirmNavigation,
): void => {
    useEffect(() => {
        if (!shouldConfirmNavigation) {
            return;
        }

        const routeChangeStart = (): void => {
            const ok = (): boolean => {
                return confirm('Are you sure you want to leave this page?');
            };

            if (!ok()) {
                Router.events.emit('routeChangeError');
                throw 'Abort route change. Please ignore this error.';
            }
        };

        Router.events.on('routeChangeStart', routeChangeStart);

        return () => {
            Router.events.off('routeChangeStart', routeChangeStart);
        };
    }, [shouldConfirmNavigation]);
};

export const useConfirmNavigation = (): void => {
    const { shouldConfirmNavigation } = useConfirmNavigationContext();

    useNextRouterBlocker(shouldConfirmNavigation);
    useBrowserRouterBlocker(shouldConfirmNavigation);
};
