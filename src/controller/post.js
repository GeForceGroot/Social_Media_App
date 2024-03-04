const {Posts, Users} = require('../db/model')

async function createNewPost(userid, title, body){
    try {
        const post = await Posts.create({
            userId: userid,
            title: title,
            body: body
        });
        return post;
    } catch (error) {
        console.error(error);
    }
}

async function showAllPosts(query){
    try {
        const posts = await Posts.findAll({
            include : [Users]
        })
        return posts
    } catch (error) {
     console.error(error)   
    }
}


module.exports = {
    createNewPost,
    showAllPosts
}

// async function Task(){
//     const posts = await showAllPosts();
//     for(let p of posts){
//         console.log(p.user.username)
//     }
// }

// Task();