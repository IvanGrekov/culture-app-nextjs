import { useMobileSidebarContext } from 'contexts/MobileSidebarContext';
import { useIsMobileSidebar } from 'hooks/mobileSidebar.hooks';

type TUseOpenMobileSidebarButton = () => {
    isVisible: boolean;
    onClick: VoidFunction;
};

export const useOpenMobileSidebarButton: TUseOpenMobileSidebarButton = () => {
    const isVisible = useIsMobileSidebar();
    const { setIsOpen } = useMobileSidebarContext();

    const onClick = (): void => {
        setIsOpen(true);
    };

    return {
        isVisible,
        onClick,
    };
};
