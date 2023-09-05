'use client';

import { createPortal } from 'react-dom';

import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import CloseIcon from 'components/icons/CloseIcon';
import styles from 'components/notifications/Notifications.module.scss';
import Typography from 'components/typography/Typography';
import { useNotificationsContext } from 'contexts/NotificationsContext';
import { useAutoRemoveNotification } from 'hooks/notifications.hooks';
import { usePortalContainer } from 'hooks/portalContainer.hooks';
import { INotification } from 'types/notifications.types';

export default function Notifications(): JSX.Element | null {
    const { mounted, portalContainer } =
        usePortalContainer('notifications-root');
    const { notifications, setNotifications } = useNotificationsContext();

    useAutoRemoveNotification();

    const onRemoveNotification = (id: INotification['id']): void => {
        setNotifications((prev) =>
            prev.filter((notification) => notification.id !== id),
        );
    };

    const notificationsComponent = (
        <div className={styles.notifications}>
            {notifications.map(({ id, message, type }) => (
                <div
                    key={id}
                    className={cx(styles.item, styles[`item--${type}`])}
                >
                    <Typography
                        element="h6"
                        variant="subtitle2"
                        className={styles.text}
                    >
                        {message}
                    </Typography>

                    <IconButton
                        Icon={CloseIcon}
                        iconSize={25}
                        onClick={(): void => onRemoveNotification(id)}
                        title="Remove notification"
                        className={styles['close-button']}
                    />
                </div>
            ))}
        </div>
    );

    return mounted
        ? createPortal(notificationsComponent, portalContainer as HTMLElement)
        : null;
}
