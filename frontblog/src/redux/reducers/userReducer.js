const userReducer = (state=[], action)=>{
    switch(action.type){
        case 'LOGIN_USER':
            return state.concat([action.data]);
        case 'LOGOUT_USER':
            return state= [];
        default:
            return state;
    }
}

export default userReducer;