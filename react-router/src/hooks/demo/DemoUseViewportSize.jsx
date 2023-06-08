import { useViewportSize } from '../useViewportSize.ts';

export default function DemoUseViewportSize() {
    const { height, width } = useViewportSize();

    return (
        <>
            Width: {width}, height: {height}
        </>
    );
}