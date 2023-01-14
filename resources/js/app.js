require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
import router from './router'
import CompaniesIndex from './components/company/CompanyIndex'
import PostsIndex from './components/povilas/Posts/Index'

createApp({
    components: {
        CompaniesIndex,
        PostsIndex
    }
}).use(router).mount('#app')
