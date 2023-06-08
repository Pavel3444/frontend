import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
    const [value, setValue] = useState(localStorage.getItem(key)|| null);

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    const setItem = (newValue) => {
        setValue(newValue);
    };

    const removeItem = () => {
        setValue(null);
    };

    return [value, { setItem, removeItem }];
}