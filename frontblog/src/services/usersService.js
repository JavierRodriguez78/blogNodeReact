import axios from 'axios';

import GlobalData from './globalData';


class UserService {


    constructor(){
        this.endPointPost = `${GlobalData.base_endpoint}/auth/`;
    }

    async loginUser(user){
        try
        {
           let result= await axios.post(this.endPointPost,user);
           return result;
        }catch(error){
            console.error(error);
        }
    }

}

export default UserService;