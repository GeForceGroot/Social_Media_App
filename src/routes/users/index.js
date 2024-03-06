const {Router, urlencoded} = require('express')
const {getUserByName, getUserById, createAonUser} = require('../../controller/user')
const route = Router();
route.use(urlencoded({extended:true}))


route.get('/:id',async (req, res)=>{
    let user;
    if(isNaN(parseInt(req.params.id))){
        user = await getUserById(req.params.id);
    }else{
        user = await getUserByName(req.params.id);
    }
    if(user){
        res.status(200).send(user)
    }else{
        res.status(404).send({
                error: 'No such user found' 
        })
    }
})

route.post('/', async(req, res)=>{
    const user = await createAonUser();
    if(user){
        res.status(201).send(user)
    }else{
        res.status(404).send({
                error: 'User is not created' 
        })
    }
})

module.exports = {
     userRoute : route
}
