import axios from 'axios';

import GlobalData from './globalData';


class PostService {


    constructor(){
        this.endPointPost = `${GlobalData.base_endpoint}/posts/`;
    }

    async setPost(post){
        try {
            let result = await axios.post(this.endPointPost, post);
            return result;
        }catch (error){
            console.error(error)
        }
    }
    
    async getAllPosts(){
        try{
            let result = await axios.get(this.endPointPost)
            return result.data         
        }catch(error){
            console.error(error);
        }
    }

    async deletePost(id){
        try {
            let result = await axios.delete(this.endPointPost + id);
            return result;
        }catch(error){
            console.error(error);
        }
    }

    async editPost(post){
        try{
            let result = await axios.put(this.endPointPost+post.id, post);
            return result;
        }catch(error){
            console.error(error);
        }

    }
}

export default PostService;