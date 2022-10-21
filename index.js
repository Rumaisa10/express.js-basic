const express = require('express')
const handle =require('./handle')
const handler = require('./handler')

const app = express()

const adminRoute = express.Router();

adminRoute.get('/dashboard',(req,res)=>{
    console.log(req.baseUrl)
    res.send('admin dashboard')
})

app.use('/admin',adminRoute)

app.get('/user/:id',handler)

app.listen(3000,()=>{
    console.log("listening to port 3000")
}) 