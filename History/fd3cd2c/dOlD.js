const asyncHandler = require("express-async-handler")
const TOKEN_KEY = "ThisIsMeSahith"
const jsonwebtoken = require("jsonwebtoken")
require("../connectDb/connectDb")()
const AmazonSignUpModel = require("../models/signUp.model")

const loginVerification = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await AmazonSignUpModel.findOne({ email })

    if (email === user.email, password === user.password) {
        let userId = user._id
        const token = jsonwebtoken.sign({ userId }, TOKEN_KEY)
        res.cookie("jwt", token)
        res.send("successful")
    }
})

module.exports = { loginVerification }