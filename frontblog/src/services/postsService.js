import axios from 'axios';

import GlobalData from './globalData';


class PostService {


    constructor(){
        this.endPointPost = `${GlobalData.base_endpoint}/posts/`;
    }
   
    
    async getAllPosts(){
        try{
            let result = await axios.get(this.endPointPost)
            return result.data         
        }catch(error){
            console.error(error);
        }
    }
}

export default PostService;