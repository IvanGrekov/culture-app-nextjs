'use client';

import { createContext, useContext, PropsWithChildren } from 'react';

import { useInitNotifications } from 'hooks/notifications.hooks';
import { TNotificationsContextValue } from 'types/notifications.types';

const NotificationsContext = createContext<TNotificationsContextValue | null>(
    null,
);

export function NotificationsProvider({
    children,
}: PropsWithChildren): JSX.Element {
    const value = useInitNotifications();

    return (
        <NotificationsContext.Provider value={value}>
            {children}
        </NotificationsContext.Provider>
    );
}

export const useNotificationsContext = (): TNotificationsContextValue => {
    const context = useContext(NotificationsContext);

    if (!context) {
        throw new Error(
            'useNotificationsContext must be used within a NotificationsProvider',
        );
    }

    return context;
};
