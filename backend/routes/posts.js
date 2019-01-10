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

Router.post('/',(req, res,next)=>{
    let postController  = new PostController(req, res ,next);
    postController.addPost();
})

Router.delete('/:id',(req,res, next)=>{
    let postController = new PostController(req, res, next);
    postController.deletePost();
})

Router.delete('/',(req, res,next)=>{
    let postController = new PostController(req, res ,next);
    postController.deleteAllPost();
})

Router.put('/:id',(req, res ,next )=>{
    let postController = new PostController(req, res ,next);
    postController.updatePost();
})

module.exports = Router;