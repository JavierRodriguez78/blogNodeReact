import postService from '../../services/postsService';

export const createPost =  (data)=>{
    console.log("Recibido createPOst ->" + JSON.stringify(data));
           return{
            type: 'ANADIR_POSTS',
            data:data
        }


}

export const loadPosts =(data)=>{
    console.log("load posts");
    return{
        type: 'CARGA_POSTS',
        data:data
    }
}

export const deletePost = (post)=>{
    const PostService = new postService();
     PostService.deletePost(post.id);
    return{
        type: 'BORRAR_POST',
        data: post

    }
}

export const editPost =(post)=>{
    const PostService = new postService();
    PostService.editPost(post);
    return {
        type: 'ACTUALIZAR',
        id: post.id,
        data: post
    }
}