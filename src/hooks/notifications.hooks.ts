import { useState, useCallback, useMemo, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import {
    DEFAULT_NOTIFICATIONS,
    MAX_NOTIFICATIONS,
    NOTIFICATION_DISPLAY_DURATION,
} from 'constants/notifications.constants';
import { useNotificationsContext } from 'contexts/NotificationsContext';
import {
    TNotificationsContextValue,
    TAddNotification,
    ENotificationType,
} from 'types/notifications.types';

type TUseInitNotifications = () => TNotificationsContextValue;

export const useInitNotifications: TUseInitNotifications = () => {
    const [notifications, setNotifications] = useState(DEFAULT_NOTIFICATIONS);

    const addNotification = useCallback<TAddNotification>((newNotification) => {
        setNotifications((prevNotifications) => {
            const slicedPrevNotifications =
                prevNotifications.length === MAX_NOTIFICATIONS
                    ? [...prevNotifications.slice(1, MAX_NOTIFICATIONS)]
                    : prevNotifications;

            return [...slicedPrevNotifications, newNotification];
        });
    }, []);

    return useMemo(
        () => ({ notifications, addNotification, setNotifications }),
        [notifications, addNotification, setNotifications],
    );
};

type TUseAddMessageToNotifications = () => (message: string) => void;

export const useAddErrorMessageToNotifications: TUseAddMessageToNotifications =
    () => {
        const context = useNotificationsContext();

        const { addNotification } = context;

        return (message) => {
            addNotification({
                message,
                id: uuidv4(),
                type: ENotificationType.error,
            });
        };
    };

export const useAddInfoMessageToNotifications: TUseAddMessageToNotifications =
    () => {
        const context = useNotificationsContext();

        const { addNotification } = context;

        return (message) => {
            addNotification({
                message,
                id: uuidv4(),
                type: ENotificationType.info,
            });
        };
    };

export const useAddSuccessMessageToNotifications: TUseAddMessageToNotifications =
    () => {
        const context = useNotificationsContext();

        const { addNotification } = context;

        return (message) => {
            addNotification({
                message,
                id: uuidv4(),
                type: ENotificationType.success,
            });
        };
    };

type TUseHandleNetworkError = (error: Error | null) => void;

export const useHandleNetworkError: TUseHandleNetworkError = (error) => {
    const addErrorMessageToNotifications = useAddErrorMessageToNotifications();

    useEffect(() => {
        if (error) {
            addErrorMessageToNotifications(`Network error: ${error.message}`);
        }
    }, [error, addErrorMessageToNotifications]);
};

export const useAutoRemoveNotification = (): void => {
    const { notifications, setNotifications } = useNotificationsContext();

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (notifications.length) {
            timeoutId = setTimeout(() => {
                setNotifications((prevNotifications) =>
                    prevNotifications.slice(1),
                );
            }, NOTIFICATION_DISPLAY_DURATION);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [notifications, setNotifications]);
};
