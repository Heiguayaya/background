import vue from 'vue';
import Router from 'vue-router';
vue.use(Router);
import demo from "../view/demo.vue"
import imgs from "../view/imgs.vue"
import TransitionGroup from '../components/TransitionGroup.vue'
export default new Router({
    routes: [{
        path: '/',
        component: demo
    }, {
        path: '/about',
        component: TransitionGroup
    }, {
        path: '/img',
        component: imgs
    }]
})