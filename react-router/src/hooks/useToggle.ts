import { useState } from 'react';

export function useToggle(values = [true, false]) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggle = (specificValue) => {
        if (specificValue) {
            const index = values.indexOf(specificValue);
            if (index !== -1) {
                setCurrentIndex(index);
            }
        } else {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
        }
    };

    const value = values[currentIndex];

    return [value, toggle];
}