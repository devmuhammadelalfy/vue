<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">


                    <!-- Dropdown menu -->
                    <select v-model="selected_category" class="inline-block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        <option value="" selected>-- all categories --</option>
                        <option v-for="category in categories" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>

                    <table class="min-w-full">
                        <thead class="bg-white border-b">
                        <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    <div class="flex flex-row items-center justify-between cursor-pointer" @click="updateOrdering('id')">
                                        <div class="leading-4 font-medium text-gray-500 uppercase tracking-wider" :class="{ 'font-bold text-blue-600': orderColumn === 'id' }">
                                            ID
                                        </div>
                                        <div class="select-none">
                                    <span :class="{
                                      'text-blue-600': orderDirection === 'asc' && orderColumn === 'id',
                                      'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'id',
                                    }">&uarr;</span>
                                            <span :class="{
                                      'text-blue-600': orderDirection === 'desc' && orderColumn === 'id',
                                      'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'id',
                                    }">&darr;</span>
                                        </div>
                                    </div>
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                title
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                content
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                category
                            </th>


                        </tr>
                        </thead>
                        <tbody>

                        <tr class="bg-gray-100 border-b" v-for="post in posts.data">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{post.id}}</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{post.title}}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{post.content}}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{post.category}}
                             </td>

                        </tr>

                        </tbody>
                    </table>
                    <TailwindPagination
                        :data="posts"
                        @pagination-change-page="page =>getPosts(page , selected_category)"
                    />
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import usePosts from "../../../composables/posts";
import useCategories from "../../../composables/categories";
import {ref ,onMounted , watch} from "vue";
export default {
    setup(){
        const selected_category = ref('');
        const orderColumn = ref('created_at');
        const orderDirection = ref('asc');
        const {posts , getPosts} = usePosts()
        const {categories , getCategories} = useCategories()
        onMounted(()=>{
            getPosts()
            getCategories()
        })
        watch(selected_category,(current , previous)=>{
            getPosts(1, current)
        })

        const updateOrdering = (column) => {
            orderColumn.value = column;
            orderDirection.value = (orderDirection.value === 'asc') ? 'desc' : 'asc';
            getPosts(
                1,
                selected_category.value,
                orderDirection.value,
                 orderColumn.value,
            );
        }


        return {posts , getPosts ,categories, getCategories , selected_category , updateOrdering , orderColumn , orderDirection};
    }

}

</script>
