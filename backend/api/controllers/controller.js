class Controller {
    constructor(req, res ,next){
        this.req = req;
        this.res = res;
        this.next= next;
    }

    returnJson(code, param)
    {
        this.res.statusCode = code;
        /*CORS*/
        this.res.header= ('Access-Controll-Allow-Origin','*');
        this.res.header= ('Access-Control-Allow-Methods','GET, POST, DELETE, UPDATE, OPTIONS');
        this.res.header= ('Acces-Control-Headers', 'Origin, x-Requested-With, Content-Type, Accept');  
        this.res.send(param);
    }

}

module.exports=Controller; 