require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
import router from './router'
import CompaniesIndex from './components/company/CompanyIndex'

createApp({
    components: {
        CompaniesIndex
    }
}).use(router).mount('#app')
