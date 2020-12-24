const express = require('express')
const { db } = require("./db/models")

const app = express()

db.sync({force:true}).then(()=>{
    app.listen("4444",()=>{
        console.log("Server started on http://localhost:4444")
    })

}).catch((e)=>{
    console.error(new Error("Could not start database"));
    console.error(e)
})

