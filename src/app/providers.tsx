'use client';

import { PageLoadingProvider } from 'components/page-loading/PageLoadingContext';
import { ConfirmNavigationProvider } from 'contexts/ConfirmNavigationContext';
import { MobileSidebarProvider } from 'contexts/MobileSidebarContext';
import { NotificationsProvider } from 'contexts/NotificationsContext';

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <PageLoadingProvider>
            <ConfirmNavigationProvider>
                <MobileSidebarProvider>
                    <NotificationsProvider>{children}</NotificationsProvider>
                </MobileSidebarProvider>
            </ConfirmNavigationProvider>
        </PageLoadingProvider>
    );
}
