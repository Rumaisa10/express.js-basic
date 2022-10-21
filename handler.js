const handler = (req,res)=>{
    console.log(req.secure)
    res.send('hello rumaisa')
}

module.exports = handler