const debounce = function(fn,time=300) {
    let timer;
    let _this = this;
    return function() {
        let args = arguments;
        if (timer) {
            clearInterval(timer);
        }
        timer = setTimeout(() => {
            return fn.apply(_this, args);
        }, time);
    }
}

export default debounce