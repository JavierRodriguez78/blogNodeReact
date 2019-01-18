import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Post from './post/index';
import EditPost from './editPost/index';


//Services

import PostService from '../../services/postsService';


//Actions
import {loadPosts} from '../../redux/actions/postActions';


class AllPost extends Component{
    constructor(props){
        super(props);
        props.getPosts();
        //this.getPosts();

        
    }
/*
    async getPosts(data){
        let postService = new PostService();
        let result = await postService.getAllPosts();
        console.log("Recibido api->" +  JSON.stringify(result));
    }*/
    render(){

       return(
            <div>
                <h1>Todos los Posts</h1>
                {this.props.posts.map((post)=>
                    <div key={post.id}>
                        {post.edited ? <EditPost post={post} key={post.id}/> :
                            <Post key={post.id} post={post}/>}

                    </div>


                )}
            </div>
        );
    }

    
}

const mapStateToProps=(state) =>{
    return{
        posts: state
    }
}

const mapDisptachToProps=(dispatch)=>{
    console.log("Entra en map");
    
    return{
       getPosts: () =>{
        console.log("llama a getPsots");
        let postService = new PostService();   
        return postService.getAllPosts().then(res=>{
           console.log("entra disptach"+ JSON.stringify(res));
           dispatch(loadPosts(res))})
           .catch((error)=>{
               console.error(error);
           })
        }
    }
}


export default connect(mapStateToProps, mapDisptachToProps)(AllPost);