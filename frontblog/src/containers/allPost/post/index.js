import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletePost} from "../../../redux/actions/postActions";

class Post extends Component{
   
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <button
                onClick={()=>this.props.dispatch({type:'EDITAR_POST',id:this.props.post.id})}>Editar</button>
                <button
                onClick={()=>this.props.dispatch(deletePost({type:'BORRAR_POST',id:this.props.post.id}))}>Borrar</button>
            </div>
        )
    }
}

//onClick={()=>this.props.dispatch({type:'BORRAR_POST',id:this.props.post.id})}>Borrar</button>

export default connect()(Post);