'use client';

import ModalContent from 'components/modal/ModalContent';
import { TModalProps } from 'components/modal/types';
import { useEscapeListener } from 'hooks/escape.hooks';
import { useCreatePortal } from 'hooks/portal.hooks';

export default function Modal({
    onClose,
    ...rest
}: TModalProps): JSX.Element | null {
    const createPortal = useCreatePortal({
        selector: '#modal-root',
        content: <ModalContent {...rest} onClose={onClose} />,
    });

    useEscapeListener(onClose);

    return createPortal();
}
