'use client';

import DrawerContent from 'components/drawer/DrawerContent';
import { IDrawerProps } from 'components/drawer/types';
import { useEscapeListener } from 'hooks/escape.hooks';
import { useCreatePortal } from 'hooks/portal.hooks';
import { useBodyScrollLock } from 'hooks/scroll.hooks';

export default function Drawer({
    onClose,
    isOpen,
    ...rest
}: IDrawerProps): JSX.Element | null {
    const createPortal = useCreatePortal({
        selector: '#drawer-root',
        content: <DrawerContent {...rest} isOpen={isOpen} onClose={onClose} />,
    });

    useBodyScrollLock(isOpen);
    useEscapeListener(onClose);

    return createPortal();
}
