import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    handleSubmit=(e) => {
        e.preventDefault();
        const Title = this.getTitle.value;
        const Message = this.getMessage.value;
        const data = {
            id: new Date(),
            Title,
            Message,
            edited: false
        }
        this.props.dispatch({
          type:'AÑADIR_POST',
          data});
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