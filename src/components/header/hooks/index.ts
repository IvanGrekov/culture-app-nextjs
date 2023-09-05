import { useRef, useState, useEffect } from 'react';

type TUseIsHeaderFixed = () => { isFixed: boolean };
export const useIsHeaderFixed: TUseIsHeaderFixed = () => {
    const prevScrollYRef = useRef(0);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const scrollHandler = (): void => {
            const { scrollY } = window;
            const isScrollDown = scrollY > prevScrollYRef.current;

            if (scrollY > 20 && isScrollDown) {
                setIsFixed(true);
            }

            if (scrollY < 20 && !isScrollDown) {
                setIsFixed(false);
            }

            prevScrollYRef.current = scrollY;
        };

        window.addEventListener('scroll', scrollHandler);

        return (): void => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return { isFixed };
};
