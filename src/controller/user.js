const {Users} = require('../db/model')
const {getRandomName} = require('../utlis/username')

async function createAonUser(){
    const user = await Users.create({
        username : getRandomName()
    })
    return user;
}


module.exports = {
    createAonUser
}