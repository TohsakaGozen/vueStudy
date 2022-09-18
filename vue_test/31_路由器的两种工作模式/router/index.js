//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import Home from '../pages/Home';
import About from "../pages/About";
import Lycories from "../pages/Lycories";
import Recoil from "../pages/Recoil";
import Image from "../pages/Image1";
import Image2 from "../pages/Image2";
//创建并暴露router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            // beforeEnter: (to, from, next) => {
            //     if (localStorage.getItem('school') === 'Sakura') {
            //         next()
            //     }
            //     else {
            //         alert('权限不够捏，请修改localStora的值捏')
            //     }
            // },
            meta: { title: '关于' }
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: { title: '首页' },
            children: [
                {
                    name: 'recoil',
                    path: 'recoil',
                    component: Recoil,

                    meta: {
                        isAuth: true,
                        title: 'Recoil'
                    },
                    children: [
                        {
                            name: "image2",
                            path: 'image2/:id/:name',
                            meta: {
                                title: 'Image1'
                            },
                            component: Image2
                        }
                    ]
                },
                {
                    name: 'lycories',
                    path: 'lycories',
                    component: Lycories,
                    meta: {
                        isAuth: true,
                        title: 'Lycories'
                    },
                    children: [
                        {
                            name: "image1",
                            path: 'image1/:id/:name',
                            component: Image,
                            meta: {
                                title: 'Image1'
                            },
                            //props的第一种写法，值为对象,该对象中的所有key-value值都会一props形式传给Image组件
                            // props: { a: 1, b: 'hello' }
                            //props的第二种写法：值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以params的形式传递给Image组件
                            //props: true
                            //props的第三种写法：值为函数，若布尔值为真，就会把该路由组件收到的所有params参数，以params的形式传递给Image组件
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    name: $route.params.name
                                }
                            }
                        }
                    ]
                },
            ]
        },
    ]
})


//全局前置路由守卫——————初始化的时候被调用，每次路由切换之前被调用
router.beforeEach((to, from, next) => {

    if (to.meta.isAuth) {//判断是否需要判断权限
        if (localStorage.getItem('school') === 'Sakura') {
            next()
        }
        else {
            alert('权限不够捏，请修改localStora的值捏')
        }
    }
    else {
        next()
    }

})

//全局后置路由守卫——————每次路由切换之后被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || 'Tohsaka'
})

export default router
