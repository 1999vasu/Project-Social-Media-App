const {Router } = require('express')
const {createUser,getUserById,getUserByUsername} =require('../../controllers/users')
const route = Router()

route.get('/:id',async (req,res)=>{
    let user;
    console.log("-----------------")
    console.log(req.params.id)
    console.log("------------------")
    if(isNaN(parseInt(req.params.id))){
        // means param is username
        user = await getUserByUsername(req.params.id)
    }else{
        // when param is user id
        user = await getUserById(req.params.id)
    }

    if(user){
        res.status(200).send(user)

    }else{
        res.status(404).send({
            error: "no such user id or username"
        })
    }

})

route.post('/',async (req,res)=>{
    const user = await createUser()
    res.status(201).send(user)
})


module.exports = {
    usersRoute: route
}
