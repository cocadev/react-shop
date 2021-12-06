export function enableHorizontalScroll(elRef) {

    const el = elRef.current;
    if (el) {
        const onWheel = (e) => {
            if (e.deltaY === 0) return;
            e.preventDefault();
            el.scrollTo({
                left: el.scrollLeft + e.deltaY * 1.5,
                behavior: "smooth"
            });
        };
        el.addEventListener("wheel", onWheel);
    }
}