const UserModel = require("../../models/erpModels/User")
const mongoose = require("mongoose")


const userSignup = async (req, res) => {
    res.json("sahith")
    // try {
    //     const { name, password, email } = req.body
    //     if(!name || !password || !email){
    //         return res.status(201).json({"message" : "please enter all the fields"})
    //     }
    //     const createdUser = await UserModel.create({
    //         name,
    //         email,
    //         password
    //     })
    //     res.json(createdUser)

    // } catch (error) {
    //     return res.status(201).json({ error })
    // }
};

exports.userLogin = async (req, res) => {
    const { name, password, email } = req.body
};

module.exports = {userSignup}