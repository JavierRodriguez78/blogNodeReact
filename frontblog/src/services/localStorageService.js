const IsLogged=()=>{
    let user = localStorage.getItem("User");
    
    if(user) return true;
    return false;

}

export default IsLogged;