
import { useFetch } from '../useFetch.ts';

export default function DemoUseFetch(){
    const {
        data,
        isLoading,
        error,
        refetch
    } = useFetch('https://jsonplaceholder.typicode.com/posts');
    const styles ={
        padding: "20px",
    }
    return (
        <div style={styles}>
            <div>
                <button onClick={() => refetch({
        params: {
            _limit: 3
        }
    })}>
    Перезапросить
    </button>
    </div>
    {isLoading && 'Загрузка...'}
    {error && 'Произошла ошибка'}
    {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
        </div>
    );
}