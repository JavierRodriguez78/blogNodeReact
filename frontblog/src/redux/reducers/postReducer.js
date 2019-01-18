const postReducer = (state=[], action)=>{
    switch(action.type){
        case 'ANADIR_POST':
            return state.concat([action.data]);
        case 'BORRAR_POST':
            console.log("borrar post reducer"+ JSON.stringify(action.data));
            return state.filter((post)=> post.id !== action.data.id);
        case 'EDITAR_POST':
            console.log("editar post");
            return state.map((post)=>post.id === action.id ? 
            {...post, edited:!post.edited}: post)
        case 'ACTUALIZAR':
            return state.map((post)=>{
                if(post.id === action.id){
                    return {
                        ...post,
                        Title: action.data.NewTitle,
                        Message: action.data.NewMessage,
                        edited: !post.edited
                    }
                } else return post;
            })
        case 'CARGA_POSTS':{
            return state.concat(action.data);
        }
        default:
            return state;
    }
}

export default postReducer;