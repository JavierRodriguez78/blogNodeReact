import userService from '../../services/usersService.js';

export const loginUser =  (data)=>{
    console.log("Recibido loginUser ->" + JSON.stringify(data));

            return {
                type: 'LOGIN_USER',
                data: data.data
            }

}

export const logoutUser=()=>{
    return{
        type: 'LOGOUT_USER'
    }
}
