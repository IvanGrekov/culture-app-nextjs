import { Dispatch, SetStateAction } from 'react';

export enum ENotificationType {
    success = 'success',
    error = 'error',
    info = 'info',
}

export interface INotification {
    id: string;
    message: string;
    type: ENotificationType;
}

export type TNotifications = Array<INotification>;

export type TAddNotification = (notification: INotification) => void;

export type TNotificationsContextValue = {
    notifications: TNotifications;
    addNotification: TAddNotification;
    setNotifications: Dispatch<SetStateAction<TNotifications>>;
};
