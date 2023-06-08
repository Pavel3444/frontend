import { useEffect, useState } from 'react';
import axios from "axios";
type FetchParams = {
    [key: string]: string | number;
};

type FetchResponse<T> = {
    data: T | null;
    isLoading: boolean;
    error: Error | null;
    refetch: (params?: FetchParams) => void;
};

export function useFetch<T>(url): FetchResponse<T> {
    const [data, setData] = useState<T|null>( null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async (url: string, params?: FetchParams) => {
        try {
            await axios.get(url, params).then(res => {
                if (res.data) {
                   setData(res.data)
                }
            })
        }catch (error) {
                    setError(error);
                }
        finally {
           setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(url);
    }, []);

    const refetch = (params?: FetchParams) => {
        fetchData(url, params);
    };

    return {
        data,
        isLoading,
        error,
        refetch
    };
}