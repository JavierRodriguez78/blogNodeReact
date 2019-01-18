const Controller = require('../controller');
const UserModel = require('../../../api/models/userModel');
const Passport = require('passport');
const jwt = require('jsonwebtoken');

class LoginController extends Controller{

    constructor(req, res ,next)
    {
        super(req, res ,next);
    }

    async login(){
        let data = this.req.body;
        console.log(JSON.stringify(data));
        try{
            let userResult = await UserModel.findOne({where:{email:data.email}})
            if(!userResult) return this.returnJson(204, "no existe usuario");
            const Token = jwt.sign(userResult.id, 'geekshubs');
            const user = {
                "username": userResult.username,
                "token": Token
            }
            this.returnJson(200,user);
        }catch(error){
            this.returnJson(500,error);
        }
    }
    
}

module.exports= LoginController;