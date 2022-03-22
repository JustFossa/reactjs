const express = require("express")
const user = require("../models/user.model")
let User = require("../models/user.model")
const router = express.Router()
const CryptoJS = require("crypto-js")
router.get('/',(req, res) => {
    
    User.find()
    .then(users => {
        let userarray = []
        users.forEach(u => {
            userarray.push(u.username)
        })

        res.json(userarray)
})
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/add',(req, res) => {
    const user = req.body.username
    const pass = req.body.password
    const admin = req.body.isAdmin
    const userdata = {
        legalName: user + " User",
        DOB: Date.now()
    }
    const newUser = new User({
        username: user,
        password: pass,
        isAdmin: admin,
        userData: userdata
    })

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error ´: '+ err))
})

router.get('/find/:username',(req, res) => {
    const user = req.params.username
    User.findOne({
        "username": user
    }).then(user => res.json(user)).catch(err => res.status(400).json("Error: " + err))
})

router.post("/update/password/:user", (req, res) => {
    const pass = req.body.password
    const user = req.params.user


    User.findOneAndUpdate({
        username: user
    }, {
        password: pass
    }).then(user => res.json(user)).catch(err => res.status(400).json("Error: "+ err))

})

module.exports = router

