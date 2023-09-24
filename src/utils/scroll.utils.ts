import { BODY_SCROLL_LOCK_CLASS_NAME } from 'constants/bodyScroll.constants';

export const lockBodyScroll = (): void => {
    const body = document.querySelector('body');

    body?.classList.add(BODY_SCROLL_LOCK_CLASS_NAME);
};

export const unlockBodyScroll = (): void => {
    const body = document.querySelector('body');

    body?.classList.remove(BODY_SCROLL_LOCK_CLASS_NAME);
};

export const getIsBodyScrollLocked = (): boolean => {
    const body = document.querySelector('body');

    return body?.classList.contains(BODY_SCROLL_LOCK_CLASS_NAME) || false;
};
