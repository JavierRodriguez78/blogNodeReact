const Express = require('express');
let Router = Express.Router();

const PostController = require('../api/controllers/postController');

Router.get('/',(req, res ,next)=>{
    let postController = new PostController(req, res ,next);
    postController.getAllPost();

})

Router.get('/:id',(req, res, next)=>{
    let postController = new PostController(req, res ,next);
    postController.getPost();
})

module.exports = Router;