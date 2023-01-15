<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-white border-b">
                        <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                #
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                title
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                content
                            </th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr class="bg-gray-100 border-b" v-for="post in posts">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{post.id}}</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{post.title}}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{post.content}}
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import usePosts from "../../../composables/posts";
import {onMounted} from "vue";
export default {
    setup(){
        const {posts , getPosts} = usePosts()
        onMounted(getPosts)
        return {posts};
    }

}
</script>
