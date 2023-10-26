import eventBus from "../eventBus"
import debounce from "../utils/debounce"
import dou from '@/assets/dou.png'

let imgs = []

function setImage(img) {
    //不在视口内使用占位图
    img.dom.src = dou;
    //判断图片是否在视口内
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    if (rect.top >= -rect.height && rect.top <= clientHeight) {
        img.dom.src = img.src
        // 占位图替换成真实图片
        imgs = imgs.filter((i) => i !== img)
    }
}

// 调用该函数设置对应的图片
function setImages() {
    for (const img of imgs) {
        setImage(img)
    }
}

eventBus.$on('mainScroll', debounce(setImages, 50))

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        };
        imgs.push(img)
        setImage(img)
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el)
    }
}