import { useWindowScroll } from '../useWindowScroll.ts';

export default function DemoUseWindowScroll() {
    const [scroll, scrollTo] = useWindowScroll();

    const scrollStyles = {
        height: "200vh",
        background: "blue",
        display: "flex",
        alignItems: "center",
        width: "500px",
        maxWidth: "100%",
        padding: "30px",
    }
    return (
        <div style={scrollStyles}>
            <p>
                Scroll position x: {scroll.x}, y: {scroll.y}
            </p>
            <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
        </div>
    );
}