const handle = (req,res)=>{
    console.log(req.app.locals.title);
    res.send('this is a home page')
}

module.exports = handle;