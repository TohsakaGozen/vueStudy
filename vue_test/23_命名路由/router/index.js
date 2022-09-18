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
                            path: 'image',
                            component: Image
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
                            path: 'image2',
                            component: Image2
                        }
                    ]
                },
            ]
        },
    ]
})
