import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router = new VueRouter({
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '首页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    meta: { isAuth: true, title: '新闻' },
                    component: News
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    meta: { isAuth: true, title: '消息' },
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: { title: '详情' },
                            // props的第一种写法 值为对象
                            // props: {a: 'hello', b: 'world'}
                            // props: true,
                            // props({params}) {
                            props({params: {id, title}}) {
                                return {
                                    id,
                                    title
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        }
    ]
})

// 前置路由守卫
router.beforeEach((to, from, next) => {
    if(to.meta.isAuth) {
        if(localStorage.getItem('school') === '尚硅谷') {
            next()
        } else {
            alert('学校名不对，请验证后登录')
        }
    } else {
        next()
    }
})

// 后置路由守卫
router.afterEach((to, from) => {
    document.title = to.meta.title || '测试页面'
})

export default router