const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const requiredLoginMiddleware = require("../middlewares/requiredLogin")
const {JWT_SECRET} = require('../keys')

const User = mongoose.model('AuthSchema');

router.get('/', requiredLoginMiddleware,(req, res) => {
    res.send("Secured Auth Data");
});

router.post('/signup', (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json("Please add all the fields");
    }
    User.findOne({
            email: email
        })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json("User Already exists!");
            }
            bcrypt.hash(password, 15)
                .then((hashedPassword) => {
                    const user = new User({
                        email: email,
                        name: name,
                        password: hashedPassword
                    })
                    user.save().then(user => {
                        res.json("Saved Done")
                    }).catch(err => {
                        console.error(err);
                    })
                })

        }).catch(err => {
            console.error(err);
        });
})


router.post('/signin',(req,res) => {
    const {email,password} = req.body; 
    if(!email || !password) {
        res.status(422).json("Please Provide a valid email and Password");
    }
    User.findOne({email: email})
        .then((savedUser)=>{
            if(!savedUser){
                res.status(422).json("Please Provide a valid email. User Not Found");
            }
            bcrypt.compare(password, savedUser.password)
                .then((doMatches)=>{
                    if(doMatches){
                        // res.json("Signed In");
                        const token = jwt.sign({_id:savedUser.id},JWT_SECRET);
                        return res.json(token);
                    }
                    else{
                        res.status(422).json("Invalid Data");
                    }
                }).catch(error=>{
                    console.error(error);
                })
        })
})

module.exports = router;