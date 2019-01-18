import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editPost} from "../../../redux/actions/postActions";

class EditPost extends Component{
    handleEdit = (e)=>{
        e.preventDefault();
        const NewTitle = this.gettitle.value;
        const NewMessage = this.getbody.value;
        const Data={
            id: this.props.post.id,
            title: NewTitle,
            body: NewMessage,
            edited:false
        }
          this.props.dispatch(editPost(Data));

    }
    
    render(){
        return(
            <div>
                <h1>Editar un post</h1>
                <form onSubmit={this.handleEdit} >
                    <input required type="text"defaultValue={this.props.post.title} placeholder="Titulo"
                    ref={(input)=>this.gettitle = input}/>
                    <br/><br/>
                    <textarea required rows="5" cols="28" 
                    placeholder="Introduce el post" defaultValue={this.props.post.body}
                    ref= {(input)=>this.getbody =input}/>
                    <br/><br/>
                    <button>Editar</button>
                </form>
            </div>
        )
    }

}

export default connect()(EditPost);