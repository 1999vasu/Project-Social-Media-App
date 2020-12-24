const express = require('express')
const { db } = require("./db/models")

const {usersRoute} = require('./routes/users')
const {postsRoute} = require('./routes/posts')
const app = express()

app.use("/api/users", usersRoute)
app.use("/api/posts",postsRoute)
app.use("/",express.static(__dirname+'/public'))

db.sync().then(()=>{
    app.listen("5555",()=>{
        console.log("Server started on http://localhost:5555")
    })

}).catch((e)=>{
    console.error(new Error("Could not start database"));
    console.error(e)
})

