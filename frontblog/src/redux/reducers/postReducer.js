const postReducer = (state=[], action)=>{
    switch(action.type){
        case 'ANADIR_POST':
            return state.concat([action.data]);
        case 'BORRAR_POST':
            console.log("borrar post reducer"+ JSON.stringify(action.data));
            return state.filter((post)=> post.id !== action.data.id);
        case 'EDITAR_POST':
            console.log("editar post");
            return state.map((post)=>{

                console.log(post);
                return post.id === action.id ?
            {...post, edited:!post.edited}: post;})
        case 'ACTUALIZAR':

            console.log("Recibido en actualizar ->" + JSON.stringify(action));
            return state.map((post)=>{
                if(post.id === action.id){
                    return {
                        ...post,
                        title: action.data.title,
                        body: action.data.body,
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