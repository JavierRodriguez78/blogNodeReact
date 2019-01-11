import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post';
import EditPost from './editPost';

class AllPost extends Component{

    render(){
        console.log(this.props.posts);
        return(
            <div>
                <h1>Todos los Posts</h1>
                {this.props.posts.map((post)=>(
                    <div key = {post.id}>
                        {post.edited ? <EditPost post={post} key={post.id} />:
                         <Post key={post.id} post={post} />}
                
                    </div>
                ))}
            </div>
        )
    }

    
}

const mapStateToProps=(state) =>{
    return{
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);