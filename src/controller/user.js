const {Users} = require('../db/model')
const {getRandomName} = require('../utlis/username')

async function createAonUser(id){
    const user = await Users.create({
        username : getRandomName(),
        userId : id
    })
    return user;
}

async function getUserById(id){
    const user = await Users.findOne({where:{id}})
    return user;
}

async function getUserByName(username){
    const user = await Users.findOne({where:{username}})
    return user;
}




module.exports = {
    createAonUser,
    getUserByName, 
    getUserById
}