'use client';

import DrawerContent from 'components/drawer/DrawerContent';
import { IDrawerProps } from 'components/drawer/types';
import { useEscapeListener } from 'hooks/escape.hooks';
import { useCreatePortal } from 'hooks/portal.hooks';

export default function Drawer({
    onClose,
    ...rest
}: IDrawerProps): JSX.Element | null {
    const createPortal = useCreatePortal({
        selector: '#drawer-root',
        content: <DrawerContent {...rest} onClose={onClose} />,
    });

    useEscapeListener(onClose);

    return createPortal();
}
