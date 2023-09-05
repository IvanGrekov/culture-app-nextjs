import { useCallback, useState } from 'react';

type TUseModal = () => {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useModal: TUseModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    const open = useCallback(() => {
        setIsOpen(true);
    }, []);

    return {
        isOpen,
        open,
        close,
    };
};
