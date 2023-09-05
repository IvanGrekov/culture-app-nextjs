import { MOBILE_SIDEBAR_SCREEN_SIZES } from 'constants/mobileSidebar';
import { useWindowSize } from 'hooks/windowSize.hooks';

export const useIsMobileSidebar = (): boolean => {
    const windowSize = useWindowSize();

    return MOBILE_SIDEBAR_SCREEN_SIZES.includes(windowSize);
};
