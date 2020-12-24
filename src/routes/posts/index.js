const {Router } = require('express')
const route = Router()

route.get('/',(req,res)=>{
    res.send('All posts')

})


module.exports = {
    postsRoute: route
}
