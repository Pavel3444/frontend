import { useState, useEffect } from 'react';

interface ScrollPosition {
    x: number;
    y: number;
}

type ScrollToOptions = Partial<ScrollPosition>;

export function useWindowScroll(): [ScrollPosition, (options: ScrollToOptions) => void] {
    const [scroll, setScroll] = useState<ScrollPosition>({ x: 0, y: 0 });

    useEffect(() => {
        function handleWindowScroll() {
            setScroll({ x: window.scrollX, y: window.scrollY });
        }

        window.addEventListener('scroll', handleWindowScroll);

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    }, []);

    function scrollTo({ x = scroll.x, y = scroll.y }: ScrollToOptions) {
        console.log('ddd')
        window.scrollTo(x, y);
    }

    return [scroll, scrollTo];
}