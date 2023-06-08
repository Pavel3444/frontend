import {useToggle} from "../useToggle.ts";

export default function DemoUseToggle() {
    const [value, toggle] = useToggle();

    return (
        <>
            <br/>
            <button onClick={() => toggle()}>
               Current value: {value}
            </button>
        </>
    );
}

// Еще примеры использования

// const [value, toggle] = useToggle(['light', 'dark']);
//
// toggle(); // -> value === 'light'
// toggle(); // -> value === 'dark'

// Так же можно передать конкретное значение и тогда
// value станет одним из значений
// toggle('dark'); // -> value === 'dark'