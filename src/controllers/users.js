const { createConnection } = require("mysql2/promise")
const {Users} = require("../db/models")
const {getRandomUsername} = require("../utils/username")

async function createUser(){

    const user = await Users.create({
        username: getRandomUsername()
    })

    return user

}

async function getUserById(id){
    return await Users.findAll({
        where: {id : id}
    })
}

async function getUserByUsername(username){
    return await Users.findAll({
        where:{
            username:username}
    })
}

module.exports ={
    createUser,
    getUserById,
    getUserByUsername
}


// Unit testing - User generation and appending into database
// async function task(){
//     console.log(await createUser())
//     console.log("------------------------")
//     console.log(await createUser())
//     console.log("------------------------")
//     console.log(await createUser())
//     console.log("------------------------")
//     console.log(await createUser())
//     console.log("------------------------")
//     console.log(await createUser())
//     console.log("------------------------")
// }
// task()
