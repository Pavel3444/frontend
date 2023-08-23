import {useEffect, useState} from "react";
import axios from "axios";

export function UseLoadList( page: number, url: string){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [hasMore, setHaseMore]= useState(true);
    useEffect(()=>{
        if (hasMore){
            setLoading(true);
            setError(false);
            axios({
                method: 'GET',
                url: url,
                params: {
                    page: page,
                }
            }).then(res=>{
                // @ts-ignore
                setData(prevState => {
                    return [...new Set([...prevState, ...res.data.results])]
                });
                if (res.data.info.pages <= page){
                    setHaseMore(false);
                }
            }).catch(e=>{
                if (e) setError(true);
            }).finally(()=>{
                setLoading(false);
            })
        }
    }, [page, url])

    return {data, error, loading, hasMore};
}