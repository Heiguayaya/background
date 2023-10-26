export default function (fn, time = 300) {
    let timer = null;
    return function (...args) {
        clearInterval(timer);
        timer = setTimeout(() => {
            return fn.apply(this, ...args);
        }, time);
    }
}