const {Router, urlencoded} = require('express')
const {createNewPost, showAllPosts} = require('../../controller/post')
const {db} = require('../../db/model')
const route = Router();
route.use(urlencoded({extended:true}))

route.get('/', async (req, res)=>{
    const posts = await showAllPosts();
    res.status(200).send(posts)
})

route.post('/', async(req, res)=>{
    const id = req.body.userId
    const title = req.body.title
    const body = req.body.body
    const post = await createNewPost(id, title, body);
    db.sync();
    res.status(201).send(post);
})


module.exports = {
     postRoute : route
}
