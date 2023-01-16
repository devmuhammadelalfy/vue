require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
// import router from './router'
// import CompaniesIndex from './components/company/CompanyIndex'
import PostsIndex from './components/povilas/Posts/Index'
import { TailwindPagination } from 'laravel-vue-pagination';

const app = createApp({})
app.component('TailwindPagination' , TailwindPagination);
app.component('posts-index' , PostsIndex);
app.mount('#app');
