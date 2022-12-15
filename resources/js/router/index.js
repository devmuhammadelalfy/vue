import {createRouter , createWebHistory} from "vue-router";
import CompanyIndex from "../components/company/CompanyIndex";
import HomeIndex from "../components/company/HomeIndex.vue";
import About from "../components/company/About.vue";
import ColorRange from "../components/ColorRange.vue";
import LogoSympol from "../components/LogoSympol.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
    {
        path: '*',
        component: NotFound
    },
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompanyIndex

    }, {
        path: '/home',
        name: 'home',
        component: HomeIndex
    }
    , {
        path: '/about',
        name: 'about',
        component: About
    },

    {
        path: '/colors',
        component: ColorRange
    },
    //
    // {
    //     path: '*',
    //     component: NotFound
    // },
    //
    // {
    //     path: '/',
    //     component: Logo
    // },
    //
    {
        path: '/logo-symbol',
        component: LogoSympol
    },
    //
    //
    // {
    //     path: '/typography',
    //     component: Typography
    // },
    //
    // {
    //     path: '/mascot',
    //     component: Mascot
    // },
    //
    // {
    //     path: '/illustrations',
    //     component: Illustrations
    // },
    //
    // {
    //     path: '/loaders-and-animations',
    //     component: LoadersAndAnimations
    // },
    //
    // {
    //     path: '/wallpapers',
    //     component: Wallpapers
    // }

];

export default createRouter({
    history:createWebHistory(),
    routes
})
