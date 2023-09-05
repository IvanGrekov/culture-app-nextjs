import { useEffect, useRef, useState } from 'react';

type TUsePortalContainer = (id: string) => {
    mounted: boolean;
    portalContainer: HTMLElement | null;
};

export const usePortalContainer: TUsePortalContainer = (id) => {
    const portalContainer = useRef<HTMLElement | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!mounted) {
            setMounted(true);
            const root = document.createElement('div');
            root.setAttribute('id', id);
            document.body.appendChild(root);
            portalContainer.current = root;
        }
    }, [id, mounted]);

    return { mounted, portalContainer: portalContainer.current };
};
