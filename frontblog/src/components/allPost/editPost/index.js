import React, {Component} from 'react';
import {connect} from 'react-redux';
class EditPost extends Component{
    handleEdit = (e)=>{
        e.preventDefault();
        const NewTitle = this.getTitle.value;
        const NewMessage = this.getMessage.value;
        const Data={
            NewTitle,
            NewMessage
        }
        this.props.dispatch({type: 'ACTUALIZAR', id: this.props.post.id, data: Data});
    }
    
    render(){
        return(
            <div>
                <h1>Editar un post</h1>
                <form onSubmit={this.handleEdit} >
                    <input required type="text"defaultValue={this.props.post.Title} placeholder="Titulo" 
                    ref={(input)=>this.getTitle = input}/>
                    <br/><br/>
                    <textarea required rows="5" cols="28" 
                    placeholder="Introduce el post" defaultValue={this.props.post.Message}
                    ref= {(input)=>this.getMessage =input}/>
                    <br/><br/>
                    <button>Editar</button>
                </form>
            </div>
        )
    }

}

export default connect()(EditPost);