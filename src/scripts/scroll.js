function scrollHandler(list) {
    let scrollDebouncer = null;
    let observerDebouncer = null;
    let listOfChildren = Object.assign([], list);
    let nowIdx  = 0;
    let nowNode = null;

    function scrolling(y) {
        if (scrollDebouncer) {
            return;
        };
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    };

    function scrollTopObserver() {
        let nowHeight = window.scrollY;
        let target    = listOfChildren[nowIdx+1];

        if (nowHeight >= target.offsetTop) {
            return true
        }
        return false;
    }

    window.addEventListener('scroll', () => {
        let y = listOfChildren[nowIdx+1].offsetTop;

        scrolling(y);
        scrollDebouncer = true;

        if (scrollTopObserver() && !observerDebouncer) {
            setTimeout(() => {
                scrollDebouncer = null;
                observerDebouncer = null;
                nowIdx += 1;
            }, 1000);
            observerDebouncer = true;
        };
    })
};

export default scrollHandler;