import {ref} from "vue";
export default function usePosts(){
    const posts = ref({})
    const getPosts = async (page = 1 , category_id = '' , orderDirection = 'asc' , orderColumn='created_at') => {
        axios.get('/api/posts?page=' + page + '&category_id=' + category_id + '&orderDirection='+orderDirection + '&orderColumn='+orderColumn )
            .then(response => {
                posts.value = response.data;
            })
    }
    return {posts , getPosts}
}
