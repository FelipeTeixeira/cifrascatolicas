export function getElementHeight(wrapper: HTMLElement): number {
    const wrapperComputedStyle = window.getComputedStyle(wrapper, null);
    let wrapperHeight = wrapper?.clientHeight;

    // height without padding
    wrapperHeight -=
        parseFloat(wrapperComputedStyle.paddingTop) +
        parseFloat(wrapperComputedStyle.paddingBottom);

    return wrapperHeight;
}
