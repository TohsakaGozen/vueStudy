//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import Home from '../pages/Home';
import About from "../pages/About";
import Lycories from "../pages/Lycories";
import Recoil from "../pages/Recoil";
import Image from "../pages/Image";
import Image2 from "../pages/Image2";
//创建并暴露router实例对象，去管理一组一组的路由规则
export default new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            children: [
                {
                    name: 'lycories',
                    path: 'lycories',
                    component: Lycories,
                    children: [
                        {
                            name: "image",
                            path: 'image/:id/:name',
                            component: Image,
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
        {
            name: 'home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'recoil',
                    path: 'recoil',
                    component: Recoil,
                    children: [
                        {
                            name: "image2",
                            path: 'image2/:id/:name',
                            component: Image2
                        }
                    ]
                },
            ]
        },
    ]
})
