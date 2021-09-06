const jwt= require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const mongoose = require('mongoose');
const User = mongoose.model('AuthSchema')

module.exports = (req,res,next) => {
    const {authorization} = req.headers;
    console.log(authorization)
    if(!authorization){
        return res.status(401).json({error: 'You must logged in'})
    }
    const token = authorization.replace("Bearer ","");
    console.log(token)
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({error: err})
        }

        const {_id} = payload
        User.findById(_id).then((userData)=>{
            req.user = userData
        })
        next()
    })
}