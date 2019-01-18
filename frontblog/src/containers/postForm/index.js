import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost} from "../../redux/actions/postActions";
import postService from '../../services/postsService';

class PostForm extends Component {
    handleSubmit=(e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const body = this.getMessage.value;
        const data = {
            title,
            body,
            edited: false
        }

        const PostService = new postService();
        PostService.setPost(data).then((result)=>{
             this.props.dispatch(createPost({type:'ANADIR_POST',data:result.data}));
        })

        this.getTitle.value='';
        this.getMessage.value='';
    }

    
    render(){
        return(
            <div>
                <h1>Crea un post</h1>
                <form onSubmit={this.handleSubmit} >
                    <input required type="text" placeholder="Titulo" 
                    ref={(input)=>this.getTitle = input}/>
                    <br/><br/>
                    <textarea required rows="5" cols="28" 
                    placeholder="Introduce el post" 
                    ref= {(input)=>this.getMessage =input}/>
                    <br/><br/>
                    <button>Añadir</button>
                </form>
            </div>
        )
    }
}

export default connect()(PostForm);