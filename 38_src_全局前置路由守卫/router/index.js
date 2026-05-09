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
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
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
        }
    ]
})

// 前置路由守卫
router.beforeEach((to, from, next) => {
    if(to.name === 'xinwen' || to.name === 'xiaoxi') {
        if(localStorage.getItem('school') === '尚硅谷') {
            next()
        } else {
            alert('学校名不对，请验证后登录')
        }
    } else {
        next()
    }
})

export default router