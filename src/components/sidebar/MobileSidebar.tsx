import Drawer from 'components/drawer/Drawer';
import { useMobileSidebar } from 'components/sidebar/hooks';
import { TSidebarProps } from 'components/sidebar/types';

export default function MobileSidebar({
    shouldAddCloseButton,
    children,
}: TSidebarProps): JSX.Element {
    const { isOpen, onClose } = useMobileSidebar();

    return (
        <Drawer
            isOpen={isOpen}
            position="left"
            shouldAddCloseButton={shouldAddCloseButton}
            onClose={onClose}
        >
            {children}
        </Drawer>
    );
}
