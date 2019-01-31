import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletePost} from "../../../redux/actions/postActions";
import IsLogged from "../../../services/localStorageService";
class Post extends Component{
   
    constructor(props){
        super(props);
    }
    buttonEdition(){
      
        if(IsLogged()){
            console.log("IsLogged->"+this.props.post.id);
            return(
                <div>
                        <button
                        onClick={()=>this.props.dispatch({type:'EDITAR_POST',id:this.props.post.id})}>Editar</button>
                        <button
                        onClick={()=>this.props.dispatch(deletePost({type:'BORRAR_POST',id:this.props.post.id}))}>Borrar</button>
                </div>
            )
        }

    }
    render(){
        return(
            <div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                {this.buttonEdition()}
            </div>
        )
    }
}


export default connect()(Post);