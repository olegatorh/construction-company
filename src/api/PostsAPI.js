import {instance} from "./api";

export const postsAPI = {
    getPosts(){
        return instance.get(`posts`).then(response => response.data)
    },
    addPost(post){
        return instance.post(`posts`, post).then(response => response.data)
    },
    deletePost(postId){
        return instance.delete(`posts/${postId}`).then(response => response)
    }

}