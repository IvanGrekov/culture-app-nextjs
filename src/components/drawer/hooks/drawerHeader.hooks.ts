import { useIsHeaderFixed } from 'hooks/header.hooks';

export const useIsHeaderCompressed = (): { isCompressed: boolean } => {
    const { isFixed } = useIsHeaderFixed();

    return { isCompressed: isFixed };
};
