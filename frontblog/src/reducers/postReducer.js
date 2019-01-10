const postReducer = (state=[], action)=>{
    switch(action.type){
        case 'AÑADIR_POST':
            console.log("añadir post");
            return state.concat([action.data]);
        case 'BORRAR_POST':
            console.log("borrar post");
            return state.filter((post)=> post.id !== action.id);
        default:
            return state;
    }
}

export default postReducer;