import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component{
   
    render(){
        return(
            <div>
                <h2>{this.props.post.Title}</h2>
                <p>{this.props.post.Message}</p>
                <button>Editar</button>
                <button
                onClick={()=>this.props.dispatch({type:'BORRAR_POST',id:this.props.post.id})}>Borrar</button>
            </div>
        )
    }
}

export default connect()(Post);