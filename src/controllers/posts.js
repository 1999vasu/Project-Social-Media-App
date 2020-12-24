const {Posts,Users} = require("../db/models")

async function createNewPost(userId, title, body){
    const post = await Posts.create({
        title,
        body,
        userId
    })

    return post

}

async function showAllPosts(query){

    const posts = await Posts.findAll({
        include: Users
    })
    return posts
}

module.exports ={
    createNewPost,
    showAllPosts
}

// Unit testing 
// async function task(){
    // console.log(await createNewPost(
    //     1,
    //     'this is sample body',
    //     'Body of first sample post'
    // )
    // ),
    // console.log(await createNewPost(
    //     2,
    //     'this is another sample body',
    //     'Body of another sample post'
    // )
    // )
//     const posts = await showAllPosts()
//     for( let p of posts){
//         console.log(p.title)
//         console.log(p.body)
//         console.log(p.user.username)
//         console.log("------------------")
//     }

// }

// task()

