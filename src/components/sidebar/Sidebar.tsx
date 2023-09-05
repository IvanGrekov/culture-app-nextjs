'use client';

import DesktopSidebar from 'components/sidebar/DesktopSidebar';
import MobileSidebar from 'components/sidebar/MobileSidebar';
import { TSidebarProps } from 'components/sidebar/types';
import { useIsMobileSidebar } from 'hooks/mobileSidebar.hooks';

export default function Sidebar(props: TSidebarProps): JSX.Element {
    const isMobileSidebar = useIsMobileSidebar();

    return isMobileSidebar ? (
        <MobileSidebar {...props} />
    ) : (
        <DesktopSidebar {...props} />
    );
}
