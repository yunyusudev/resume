
const goScrollTo = (goToElement) => {
    //算網頁滑了多少的高度
    const targetPosition = document.querySelector(goToElement).offsetTop;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    //速度
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        //無滾動效果
        // window.scrollTo(0, distance*(progress/duration) + startPosition);
        //增加效果
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
    // return [useScrollTo];
}
function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};


export default goScrollTo;