import {createRouter , createWebHistory} from "vue-router";
import CompanyIndex from "../components/company/CompanyIndex";

const routes = [
    {
        path : '/dashbord',
        name : companies.index,
        component : CompanyIndex

    }


];

export default createRouter({
    history:createWebHistory(),
    routes
})
