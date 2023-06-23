import { useEffect, useState } from 'react';

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>();
    const [scrollYPosition, setScrollYPosition] = useState<number>(0);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;

            let direction: 'down' | 'up' =
                scrollY > lastScrollY ? 'down' : 'up';
            if (
                direction !== scrollDirection &&
                (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
            ) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;

            setScrollYPosition(lastScrollY);
        };

        window.addEventListener('scroll', updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener('scroll', updateScrollDirection); // clean up
        };
    }, [scrollDirection, scrollYPosition]);

    return {
        scrollDirection,
        scrollYPosition
    };
}

export default useScrollDirection;
