const postReducer = (state=[], action)=>{
    switch(action.type){
        case 'AÑADIR_POST':
            console.log("añadir post");
            return state.concat([action.data]);
        case 'BORRAR_POST':
            console.log("borrar post");
            return state.filter((post)=> post.id !== action.id);
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
        default:
            return state;
    }
}

export default postReducer;