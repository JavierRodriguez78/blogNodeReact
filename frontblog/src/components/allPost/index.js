import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post';

class AllPost extends Component{

    render(){
        console.log(this.props.posts);
        return(
            <div>
                <h1>Todos los Posts</h1>
                {this.props.posts.map((post)=><Post key={post.id} post={post} />)}
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