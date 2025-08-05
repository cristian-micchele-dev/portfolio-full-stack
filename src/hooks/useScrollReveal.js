import { useEffect } from 'react';

const useScrollReveal = (ref) => {
    useEffect(() => {
        const handleScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (top < windowHeight - 100) {
                    element.classList.add('reveal');
                } else {
                    element.classList.remove('reveal');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref]);
};

export default useScrollReveal;